import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { NavigatorButtonWrapper } from "src/styles/components/Dashboard/DashboardNavBarNavigator/NavigatorButton";

type NavigatorButtonProps = {
  router: string;
  icon: ReactNode;
  marginTop: string;
  text: string;
};

export function NavigatorButton({ router, icon, marginTop, text }: NavigatorButtonProps) {
  const nextRouter = useRouter();
  const pathname = nextRouter.pathname;
  const formattedRouter = router[0] === "/" ? router.slice(1) : router;

  return (
    <Link href={`/${formattedRouter}`}>
      <NavigatorButtonWrapper isActive={`/${formattedRouter}` === pathname ? true : false} style={{ marginTop }}>
        <span>
          { icon }
        </span>
        <strong>
          { text }
        </strong>
      </NavigatorButtonWrapper>
    </Link>
  )
}