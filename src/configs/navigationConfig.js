import React from "react";
import * as Icon from "react-feather";
const navigationConfig = [
  {
    id: "dashboard",
    title: "DASHBOARD",
    type: "item",
    permissions: ["admin", "editor"],
    navLink: "/",
  },
  {
    type: "groupHeader",
    groupTitle: "Register User list",
  },
  {
    id: "registerUserList",
    title: "User-List ",
    type: "item",
    icon: <Icon.ArrowRight size={12} />,
    permissions: ["admin", "editor"],
    navLink: "/app/brahmaand/registeruser/registerUserList",
  },
  {
    type: "groupHeader",
    groupTitle: "Category",
  },
  {
    id: "addCategory",
    title: "List of category ",
    type: "item",
    icon: <Icon.ArrowRight size={12} />,
    permissions: ["admin", "editor"],
    navLink: "/app/brahmaand/category/categoryList",
  },
  {
    type: "groupHeader",
    groupTitle: "Subcategory",
  },
  {
    id: "addSubcategory",
    title: " List of subcategory",
    type: "item",
    icon: <Icon.ArrowRight size={12} />,
    permissions: ["admin", "editor"],
    navLink: "/app/brahmaand/subcategory/subcategoryList",
  },
  {
    type: "groupHeader",
    groupTitle: "Resources list ",
  },
  {
    id: " Admin ResourceList",
    title: "List of Promoted Resource ",
    type: "item",
    icon: <Icon.ArrowRight size={12} />,
    permissions: ["admin", "editor"],
    navLink: "/app/brahmaand/resource/resourceList",
  },
  {
    id: "User ResourceList",
    title: "List of User Resource   ",
    type: "item",
    icon: <Icon.ArrowRight size={12} />,
    permissions: ["admin", "editor"],
    navLink: "/app/brahmaand/resource/userResourceList",
  },
  {
    type: "groupHeader",
    groupTitle: "Content Creator list ",
  },
  {
    id: "User ResourceList",
    title: "List of User Content Creator Resource   ",
    type: "item",
    icon: <Icon.ArrowRight size={12} />,
    permissions: ["admin", "editor"],
    navLink: "/app/brahmaand/resource/userContentCreator",
  },
  {
    type: "groupHeader",
    groupTitle: "Commented Resource ",
  },
  {
    id: "ResourceComment",
    title: "Resource Comment  ",
    type: "item",
    icon: <Icon.ArrowRight size={12} />,
    permissions: ["admin", "editor"],
    navLink: "/app/brahmaand/resource/resourceComment",
  },
  // {
  //   type: "groupHeader",
  //   groupTitle: "Add sponsor ",
  // },

  // {
  //   id: "basedCategory",
  //   title: "Based on category list  ",
  //   type: "item",
  //   icon: <Icon.ArrowRight size={12} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/brahmaand/sponsor/basedCategory",
  // },
  // {
  //   id: "basedSubCategory",
  //   title: "based on subcategory list ",
  //   type: "item",
  //   icon: <Icon.ArrowRight size={12} />,
  //   permissions: ["admin", "editor"],
  //   // navLink: "/app/package/nonActivePlanList",
  //   navLink: "/app/brahmaand/sponsor/basedSubCategory",
  // },
  {
    type: "groupHeader",
    groupTitle: "Blog",
  },
  {
    id: "blogs",
    title: "Blog List",
    type: "item",
    icon: <Icon.ArrowRight size={12} />,
    permissions: ["admin", "editor"],
    navLink: "/app/brahmaand/blogs/blogList",
  },
  {
    id: "blog",
    title: "Comment Blog",
    type: "item",
    icon: <Icon.ArrowRight size={12} />,
    permissions: ["admin", "editor"],
    navLink: "/app/brahmaand/blogs/commentBlog",
  },
  {
    type: "groupHeader",
    groupTitle: "WarZone",
  },
  {
    id: "Warzone",
    title: "WarZone ",
    type: "item",
    icon: <Icon.ArrowRight size={12} />,
    permissions: ["admin", "editor"],
    navLink: "/app/brahmaand/content/warzone",
  },
  {
    type: "groupHeader",
    groupTitle: "LeaderBoard",
  },
  {
    id: "leaderBoard",
    title: "leaderboard- All Time ",
    type: "item",
    icon: <Icon.ArrowRight size={12} />,
    permissions: ["admin", "editor"],
    navLink: "/app/brahmaand/leaderboard/leaderBoardList",
  },
  {
    id: "leaderBoard monthly",
    title: "leaderboard-Monthly ",
    type: "item",
    icon: <Icon.ArrowRight size={12} />,
    permissions: ["admin", "editor"],
    navLink: "/app/brahmaand/leaderboard/leaderboardmonthly",
  },
  // {
  //   id: "leaderBoard winner",
  //   title: "Weekly Winner ",
  //   type: "item",
  //   icon: <Icon.ArrowRight size={12} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/brahmaand/leaderboard/weeklyWinner",
  // },
  {
    id: "leaderBoard metors",
    title: "Update Metores ",
    type: "item",
    icon: <Icon.ArrowRight size={12} />,
    permissions: ["admin", "editor"],
    navLink: "/app/brahmaand/leaderboard/updatemetors",
  },
  {
    id: "leaderBoard dollar",
    title: "Users Earning ",
    type: "item",
    icon: <Icon.ArrowRight size={12} />,
    permissions: ["admin", "editor"],
    navLink: "/app/brahmaand/leaderboard/userearning/",
  },
  {
    id: "feature Content",
    title: "Feature Content ",
    type: "item",
    icon: <Icon.ArrowRight size={12} />,
    permissions: ["admin", "editor"],
    navLink: "/app/brahmaand/content/featureContent",
  },
  {
    type: "groupHeader",
    groupTitle: "Trending Topics",
  },
  {
    id: "trendingtopics",
    title: "Add Trending topics ",
    type: "item",
    icon: <Icon.ArrowRight size={12} />,
    permissions: ["admin", "editor"],
    navLink: "/apps/brahmaand/trendingtopics",
  },
  {
    type: "groupHeader",
    groupTitle: "other Service",
  },
  {
    id: "notification",
    title: "Notification ",
    type: "item",
    icon: <Icon.ArrowRight size={12} />,
    permissions: ["admin", "editor"],
    navLink: "/app/notif/notification",
  },
  {
    id: "contact",
    title: "Contact ",
    type: "item",
    icon: <Icon.ArrowRight size={12} />,
    permissions: ["admin", "editor"],
    navLink: "/app/brahmaand/contact/Contact",
  },
  {
    id: "newsLetter",
    title: "NewsLetter ",
    type: "item",
    icon: <Icon.ArrowRight size={12} />,
    permissions: ["admin", "editor"],
    navLink: "/app/brahmaand/newsletter/NewsLetter",
  },
  {
    id: "faq",
    title: "FAQ ",
    type: "item",
    icon: <Icon.ArrowRight size={12} />,
    permissions: ["admin", "editor"],
    navLink: "/app/brahmaand/faq/faqList",
  },
  {
    id: "term & condition",
    title: "Term & Condition",
    type: "item",
    icon: <Icon.ArrowRight size={12} />,
    permissions: ["admin", "editor"],
    navLink: "/app/brahmaand/termscondition/termConditionList",
  },
  {
    id: "privacypolicy",
    title: "PrivacyPolicy",
    type: "item",
    icon: <Icon.ArrowRight size={12} />,
    permissions: ["admin", "editor"],
    navLink: "/app/brahmaand/privacypolicy/privacyPolicy",
  },
  {
    id: "how its works",
    title: "How Its Works",
    type: "item",
    icon: <Icon.ArrowRight size={12} />,
    permissions: ["admin", "editor"],
    navLink: "/app/brahmaand/works/works",
  },
  {
    id: "logout",
    title: "Logout",
    type: "item",
    icon: <Icon.ArrowRight size={12} />,
    permissions: ["admin", "editor"],
  },
];
export default navigationConfig;
