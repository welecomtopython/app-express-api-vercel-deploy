interface element{
    type:string,
    class?:string,

}
export default function SVG(element:element) {
    switch (element.type) {
      case "porject":
        return (
          <svg
            aria-hidden="true"
            className={`${element.class} octicon octicon-table UnderlineNav-octicon mr-3`}
            data-view-component="true"
            height="16"
            version="1.1"
            viewBox="0 0 16 16"
            width="16"
          >
            <path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25ZM6.5 6.5v8h7.75a.25.25 0 0 0 .25-.25V6.5Zm8-1.5V1.75a.25.25 0 0 0-.25-.25H6.5V5Zm-13 1.5v7.75c0 .138.112.25.25.25H5v-8ZM5 5V1.5H1.75a.25.25 0 0 0-.25.25V5Z"></path>
          </svg>
        );
      case "isuue":
        return (
          <svg
            aria-hidden="true"
            className="octicon octicon-issue-opened UnderlineNav-octicon d-none d-sm-inline"
            data-view-component="true"
            height="16"
            version="1.1"
            viewBox="0 0 16 16"
            width="16"
          >
            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z" />
          </svg>
        );
        case "prodect":
          return (
            <svg
              aria-label="Terminal"
              className="octicon octicon-terminal d-block mr-2 justify-end justify-around"
              data-view-component="true"
              height="19"
              role="img"
              version="1.1"
              viewBox="0 0 24 24"
              width="22"
            >
              <path d="M9.25 12a.75.75 0 0 1-.22.53l-2.75 2.75a.75.75 0 0 1-1.06-1.06L7.44 12 5.22 9.78a.75.75 0 1 1 1.06-1.06l2.75 2.75c.141.14.22.331.22.53Zm2 2a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5h-5Z" />
              <path d="M0 4.75C0 3.784.784 3 1.75 3h20.5c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 22.25 21H1.75A1.75 1.75 0 0 1 0 19.25Zm1.75-.25a.25.25 0 0 0-.25.25v14.5c0 .138.112.25.25.25h20.5a.25.25 0 0 0 .25-.25V4.75a.25.25 0 0 0-.25-.25Z" />
            </svg>
          );
          case "folder" :
            return (
              <svg
                aria-hidden="true"
                className="icon-directory"
                fill="currentColor"
                focusable="false"
                height="16"
                role="img"
                style={{display:"inline-block; user-select:none;vertical-align:text-bottom;overflow:visible"}}
                viewBox="0 0 16 16"
                width="16"
              >
                <path d="M1.75 1A1.75 1.75 0 0 0 0 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0 0 16 13.25v-8.5A1.75 1.75 0 0 0 14.25 3H7.5a.25.25 0 0 1-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75Z" />
              </svg>
            );
          case "file" :
            return (
              <svg
                aria-hidden="true"
                className="color-fg-muted"
                fill="currentColor"
                focusable="false"
                height="16"
                role="img"
                style={{display:"inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"}}
                viewBox="0 0 16 16"
                width="16"
              >
                <path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z" />
              </svg>
            );
            case "GoLeft":
              return (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              );
    }
    

       
  
}
