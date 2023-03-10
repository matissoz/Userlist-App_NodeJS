import Button from "../../common/Button/Button";

type NavbarProps = {
  onModalOpen: (state: boolean) => void;
};

const Navbar = ({ onModalOpen }: NavbarProps) => (
  <div>
    <Button onClick={() => onModalOpen(true)}>Add New</Button>
  </div>
);

export default Navbar;
