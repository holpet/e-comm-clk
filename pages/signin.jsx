import { getProviders, signIn, getSession } from "next-auth/react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";

const getIcon = (name) => {
  switch (name) {
    case "Google":
      return faGoogle;
    case "Facebook":
      return faFacebook;
  }
};

export default function SignIn({ providers }) {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-mainBlackGray">
      <div className="sm:min-w-[400px] min-w-[300px] border-2 border-mainHighlightGray text-center rounded-2xl p-7 bg-white grid justify-items-center">
        <span className="text-3xl p-2">Welcome!</span>
        <p className="pb-2">
          Please, sign in to the{" "}
          <span className="text-mainBrown font-bold">CLK</span>
          <span className="text-mainGray font-bold">SHOP</span>:
        </p>
        {Object.values(providers).map((provider) => (
          <div
            key={provider.name}
            className="grid grid-flow-col grid-cols-1 w-11/12 button sm:text-lg text-base m-1"
          >
            <div className="text-left !font-normal p-1">
              <button onClick={() => signIn(provider.id)}>
                <FontAwesomeIcon
                  icon={getIcon(provider.name)}
                  className="px-2 text-mainDarkerBrown"
                  size="lg"
                />
                Sign in with{" "}
                <span className="!font-semibold">{provider.name}</span>
              </button>
            </div>
          </div>
        ))}
        <div className="w-[70px] sm:w-[100px]  h-auto">
          <img src="/logo/clk.png" alt="CLK logo" />
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { req } = context;
  const session = await getSession({ req });
  if (session) {
    return {
      redirect: { destination: "/" },
    };
  }
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
