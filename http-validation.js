import fetch from 'node-fetch';

function handleError(error){
    throw new Error(error.message);
}

async function checkStatus(arrayURLs){
    try {
        const arrayStatus = await Promise
            .all(arrayURLs
                .map(async url => {
                    const res = await fetch(url);
                    return res.status;
        }));
        return arrayStatus;
    } catch (error) {
        handleError(error);
    }
}

function createArrayOfURLs(arrayLinks){
    return arrayLinks
        .map(objectLink => Object
            .values(objectLink).join());
}

export default async function validateURLs(arrayLinks){
    const links = createArrayOfURLs(arrayLinks);
    const statusLinks = await checkStatus(links);

    const results = arrayLinks.map((object, index) => ({
        ...object, 
        status:statusLinks[index]
    }));

    return results;
}