export default function Layout ({
    children
}:Readonly<{ 
    children: React.ReactNode 
}>
) {
    console.log('blablblaLayout render')
    return(
        <div>
            {children}
          <h2>Layout BLABLA</h2>  
        </div>
    )
}
