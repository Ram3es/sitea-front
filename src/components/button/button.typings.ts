export interface IButtonTypings {
  color?: string;
  textColor?: string;
  isActive?: boolean;
  minWidth?: number;
  isDisabled?: boolean;
}

export interface IButtonProps extends IButtonTypings {
  title: string;
  onClick?(): void;
}
