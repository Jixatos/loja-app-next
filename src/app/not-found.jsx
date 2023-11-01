import Image from "next/image";

export default function NotFound(){

    return(
        <div>
            <h1>404 - Not Found</h1>
            <figure>
                <Image src="https://http.dog/404.jpg" alt="404dog" width={539} height={503}/>
            </figure>
            <p>Página não encontrada</p>
        </div>
    );
}