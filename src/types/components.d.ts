interface SignProps {
  text?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

interface SignModalProps {
  onClose: () => void;
  children: React.ReactNode;
}