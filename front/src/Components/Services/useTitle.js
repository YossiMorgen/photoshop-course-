import { useEffect } from "react";

function useTitle(title){

    useEffect(() => {
        document.title = "my app | " + title;
      }, [title])

}

export default useTitle;