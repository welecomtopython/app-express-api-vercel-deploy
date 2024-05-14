import NavBar from "./NavBar/NavBar";

export default function RootLayout({children,}: {children: React.ReactNode;}) {

    return(
        <div className="
        ">
           <NavBar/>
            {children}
            
        </div>
    )
}