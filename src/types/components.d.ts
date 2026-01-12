interface SignProps {
  title?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

interface SignModalProps {
  onClose: () => void;
  children: React.ReactNode;
}
