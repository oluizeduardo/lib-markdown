function createArrayOfURLs(arrayLinks){
    return arrayLinks.map(objectLink => Object.values(objectLink).join());
}

export default function validateURLs(arrayLinks){
    return createArrayOfURLs(arrayLinks);
}