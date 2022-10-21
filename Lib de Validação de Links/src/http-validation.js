function extractLinks(linksArray){
    return linksArray.map((objectLink) => Object.values(objectLink).join());
}

async function checkStatus (URLArray){
    const arrayStatus = await Promise
    .all(
        URLArray.map(async (URL) => {
            try {
                const response = await fetch(URL);
                return response.status;
            } catch (error) {
                return manageErrors(error);
            }
        })
    );
    return arrayStatus;
}

function manageErrors(error){
    if (error.cause.code === 'ENOTFOUND') {
        return "Link not found .-.";
    }
    else if(error.cause.code === 'UNABLE_TO_VERIFY_LEAF_SIGNATURE'){
        return "vai da não pae fala com o firewall kk";
    }
    else{
        return "Something went wrong :(";
    }
}

export default async function validatedList (listLinks){
    const links = extractLinks(listLinks);
    const status = await checkStatus(links);

    return listLinks.map((object, index) => ({
        ...object,
        status: status[index]
    }));

}