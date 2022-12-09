import { FC, FunctionComponent, MouseEventHandler, SVGProps } from 'react';
import { ReactComponent as logo } from '@assets/img/logo.svg';
import { ReactComponent as girl } from '@assets/img/girl.svg';
import { ReactComponent as grid } from '@assets/img/Grid.svg';
import { ReactComponent as coins } from '@assets/img/coins.svg';
import { ReactComponent as user } from '@assets/img/user.svg';
import { ReactComponent as logout } from '@assets/img/logout.svg';

const ICONS: Record<string, FunctionComponent<SVGProps<SVGSVGElement>>> = {
  logo,
  girl,
  grid,
  coins,
  user,
  logout,
};

interface IIconProps {
  type: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
}

export const Icon: FC<IIconProps> = (props) => {
  const NewIcon = ICONS[props.type];

  if (!NewIcon) {
    return null;
  }

  return <NewIcon {...props} />;
};
