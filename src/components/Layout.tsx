type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => (
  <div className="flex bg-stone-100 h-screen justify-center">
    <div className="mt-10 w-10/12 md:w-8/12 ">{children}</div>
  </div>
);

export default Layout;
