import React, { useContext } from "react";
import { MenuContext } from "../../widgets/Menu/context";
import StyledMenuItem, { StyledMenuItemContainer, StyledMenuItemAbsolute } from "./styles";
import { MenuItemProps } from "./types";

const MenuItem: React.FC<MenuItemProps> = ({
  children,
  href,
  disabled,
  isActive = false,
  variant = "default",
  statusColor,
  ...props
}) => {
  const { linkComponent } = useContext(MenuContext);
  const itemLinkProps: unknown =
    !disabled && href
      ? {
          as: linkComponent,
          href,
        }
      : {
          as: "div",
        };
  return (
    <StyledMenuItemContainer $isActive={isActive} $variant={variant}>
      <StyledMenuItem {...itemLinkProps} $isActive={isActive} $variant={variant} $statusColor={statusColor} {...props}>
        {children}
        <StyledMenuItemAbsolute>{}</StyledMenuItemAbsolute>
      </StyledMenuItem>
    </StyledMenuItemContainer>
  );
};

export default MenuItem;
