import Link from "next/link";
import { useRouter } from "next/router";

import { NavigatorButtonWrapper } from "src/styles/components/Dashboard/DashboardNavBarNavigator/NavigatorButton";
import { NavigatorButtonProps } from "./types";

export function NavigatorButton({ router, icon, text }: NavigatorButtonProps) {
  const nextRouter = useRouter();
  const pathname = nextRouter.pathname;
  const formattedRouter = router[0] === "/" ? router.slice(1) : router;

  return (
    <Link href={`/${formattedRouter}`}>
      <NavigatorButtonWrapper isActive={`/${formattedRouter}` === pathname ? true : false}>
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