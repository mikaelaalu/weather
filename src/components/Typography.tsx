type Props = {
  children: React.ReactNode;
};

export const H1: React.FC<Props> = ({ children }) => (
  <h1 className="text-xl text-center mb-6"> {children}</h1>
);

export const H2: React.FC<Props> = ({ children }) => (
  <h2 className="text-lg text-center mb-2 text-slate-600"> {children}</h2>
);

export const ParagraphBold: React.FC<Props> = ({ children }) => (
  <p className="text-base font-semibold"> {children}</p>
);

export const ParagraphSmall: React.FC<Props> = ({ children }) => (
  <p className="text-sm text-slate-600"> {children}</p>
);
