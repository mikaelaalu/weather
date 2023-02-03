type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => (
  <div className="flex justify-center">
    <div className="mt-10 border-4 w-10/12 md:w-8/12 ">{children}</div>
  </div>
);

export default Layout;
