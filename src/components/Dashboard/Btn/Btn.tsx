interface BtnProps {
  children: React.ReactNode;
}

const Btn = ({ children }: BtnProps) => {
  return <button type="submit">{children}</button>;
};

export default Btn;
