import { RouteObject } from "react-router-dom";
import { Normal } from "./pages/normal/Normal";
import { Main } from "./pages/main/Main";
import { Community } from "./pages/community/Community";
import { List } from "./pages/community/list/List";
import { Create } from "./pages/community/create/Create";
import { Detail } from "./pages/community/detail/Detail";
import { Modify } from "./pages/community/modify/Modify";
import { MyPage } from "./pages/mypage/MyPage";
import { Profile } from "./pages/mypage/profile/Profile";
import { Activity } from "./pages/mypage/activity/Activity";
import { Code } from "./pages/code/Code";
import { Exception } from "./pages/exception/Exception";
import { Ranking } from "./pages/ranking/Ranking";
import { RankingMain } from "./pages/ranking/rankingMain/RankingMain";
import { RankingList } from "./pages/ranking/rankingList/RankingList";
import { RankingDetail } from "./pages/ranking/rankingDetail/RankingDetail";

const router: RouteObject[] = [
  {
    path: "/",
    element: <Normal />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "/ranking",
        element: <Ranking />,
        children: [
          { index: true, element: <RankingMain /> },
          { path: "list/:rankNum", element: <RankingList /> },
          { path: "detail/:id", element: <RankingDetail /> },
        ],
      },
      {
        path: "/community",
        element: <Community />,
        children: [
          { index: true, element: <List /> },
          { path: "create", element: <Create /> },
          { path: "detail/:id", element: <Detail /> },
          { path: "modify/:id", element: <Modify /> },
        ],
      },
      {
        path: "/mypage",
        element: <MyPage />,
        children: [
          { index: true, element: <Profile /> },
          { path: "activity", element: <Activity /> },
        ],
      },
    ],
  },
  {
    path: "/code",
    element: <Code />,
  },
  {
    path: "*",
    element: <Exception />,
    children: [
      //   { path: "login-success", element: <LoginSuccess /> },
      //   { path: "*", element: <Page404 /> },
    ],
  },
];

export default router;
