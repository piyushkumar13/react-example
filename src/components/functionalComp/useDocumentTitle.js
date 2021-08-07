import React, {useEffect} from 'react';

// function useDocumentTitle(count) {
//
//     useEffect(() => {
//         document.title = `Clicked ${count}`;
//
//     });
//
// }
//
// export default useDocumentTitle;


const useDocumentTitle = (count) =>{

    useEffect(() => {
        document.title = `Clicked ${count}`;

    });

}
/* Both the above function types will work*/
export default useDocumentTitle;