import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";
import { SxProps, Theme } from "@mui/material/styles";

interface ListItemLinkProps {
  icon?: React.ReactElement;
  primary: string;
  to: string;
  onClick?: () => void;
}

interface Props {
  style?: SxProps<Theme>;
  onItemClick?: () => void;
  showMyApps: boolean;
}

function ListItemLink(props: ListItemLinkProps) {
  const { primary, to, onClick } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef<HTMLAnchorElement, Omit<RouterLinkProps, "to">>(
        function Link(itemProps, ref) {
          return (
            <RouterLink to={to} ref={ref} {...itemProps} role={undefined} />
          );
        }
      ),
    [to]
  );

  return (
    <ListItem
      button
      onClick={onClick}
      component={renderLink}
      sx={{
        width: { lg: "auto", md: "auto" },
        "&:hover": {
          background: { lg: "none" },
        },
      }}
    >
      <ListItemText
        disableTypography
        primary={primary}
        sx={{
          fontWeight: "bold",
          fontSize: "1.1rem",
          "&:hover": {
            color: "primary.main",
          },
        }}
      />
    </ListItem>
  );
}

const Navs = ({ style, onItemClick, showMyApps }: Props) => {
  const pages = [
    {
      name: "الرئيسية",
      to: "/",
      show: true,
    },
    {
      name: "الخدمات",
      to: "/services",
      show: true,
    },
    {
      name: "طلباتى",
      to: "/myApps",
      show: false,
    },
    {
      name: "الشكاوي",
      to: "/complint",
      show: true,
    },
    {
      name: "عن المنصة",
      to: "/info",
      show: true,
    },
  ];
  const [navs, setNavs] = React.useState<Array<any>>(pages);
  React.useEffect(() => {
    if (showMyApps) {
      let c = navs.map((a) => {
        if (showMyApps) {
          // a.show = true;
        }
        return a;
      });
      setNavs(c);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showMyApps]);

  return (
    <List
      component="nav"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        ...style,
      }}
    >
      {navs.map((page, index) => {
        return (
          page.show === true && (
            <ListItemLink
              key={index}
              to={page.to}
              primary={page.name}
              onClick={onItemClick}
            />
          )
        );
      })}
    </List>
  );
};

export default Navs;
