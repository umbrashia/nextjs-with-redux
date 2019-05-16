export default function reducer(state={
    seoHeaderData:{
        title:"No title found...",
        metaDescription:"No meta description found...",
        metaTitle:"No meta title found...",
    }
},action){
    switch (action.type) {
        case "doSetSeoInformation": {
            state.seoHeaderData=action.payload;
            return { ...state };
        }
        default: {
            return state;
        }
    }
}