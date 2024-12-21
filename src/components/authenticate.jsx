import SignInButton from "@/components/buttons/signin-button";
export const Authenticate = ({callbackUrl}) => {
  return (
    <div className="flex flex-col m-8">
      <div className="text-xl"> Please Authenticate</div>
      <SignInButton callbackUrl={callbackUrl} />
    </div>
  );
};
