import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <main>
          <img src="imgs/logo.png" alt="" />
          <h4>
            Somos una empresa dedicada al alquiler de automoviles pot todo el
            pais
          </h4>
          <Link href="/rent">
            <a>Entrar</a>
          </Link>
        </main>
      </div>

      <style jsx>{`
        main {
          display: grid;
          place-content: center;
          place-items: center;
          box-shadow: 0px 0px 10px rgba(0, 0, 0,1);
          padding: 20px;
        }
        h4 {
          font-style: italic;
        }
        a {
          padding: 14px 20px;
          background-color: #000;
          color: #fff;
          box-shadow: 0px 0px 10px rgba(0, 0, 0,1);
          margin-top: 20px;
          transition: all ease-in 0.7s;
        }
        a:hover {
          background-color: #0009;
        }
        div {
          display: grid;
          place-content: center;
          place-items: center;
          height: 100vh;
        }
      `}</style>
    </>
  );
}
