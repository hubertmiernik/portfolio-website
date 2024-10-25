import { Prism } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

type SyntaxHighlighterProps = {
  children: string;
};

const SyntaxHighlighter = ({ children }: SyntaxHighlighterProps) => {
  return (
    <Prism language="javascript" style={darcula}>
      {children}
    </Prism>
  );
};

export default SyntaxHighlighter;
