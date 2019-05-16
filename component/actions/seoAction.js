export function setSeoData(data) {
    return {
        type: "doSetSeoInformation",
        payload: {
            title: data.title,
            metaDescription: data.metaDescription,
            metaTitle: "No meta title found...",
        }
    };
}