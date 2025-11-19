import { JSX } from "react";
import { Column } from "./column-type";

export type UserData = {
    userId:string;
    user: JSX.Element;
    email: string;
    pNumber: string;
    gender:string;
    date: string;
    isSubs:boolean;
    subsType:string;
    status: string;
    action: JSX.Element;
  };
  export const userColumns: readonly Column<UserData>[] = [
    { id: "user", label: "User Name", minWidth: 170, sortable: true },
    { id: "email", label: "Email Address", minWidth: 170, sortable: true },
    {
      id: "pNumber",
      label: "Phone Number",
      minWidth: 170,
      align: "right",
      format: (value: number) => value.toLocaleString("en-US"),
    },
    {
        id: "gender",
        label: "Gender",
        minWidth: 170,
        align: "right",
        format: (value: number) => value.toLocaleString("en-US"),
      },
    {
      id: "date",
      label: "Registration Date",
      minWidth: 170,
      align: "right",
      format: (value: number) => value.toLocaleString("en-US"),
      sortable: true,
    },
    {
        id: "isSubs",
        label: "Is Subscribed",
        minWidth: 170,
        align: "right",
        format: (value: number) => value.toLocaleString("en-US"),
      },
      {
        id: "subsType",
        label: "Subscription Type",
        minWidth: 170,
        align: "right",
        format: (value: number) => value.toLocaleString("en-US"),
      },
    {
      id: "status",
      label: "Status",
      minWidth: 170,
      align: "right",
      format: (value: number) => value.toFixed(2),
      sortable: false,
      filterOptions: ["inactive", "active"],
    },
    {
      id: "action",
      label: "Action",
      minWidth: 170,
      align: "right",
      format: (value: number) => value.toFixed(2),
    },
  ];
  
  export function createUserData(
    userId:string,
    user: JSX.Element,
    email: string,
    pNumber: string,
    gender:string,
    date: string,
    isSubs:boolean,
    subsType:string,
    status: string,
    action: JSX.Element,
  ): UserData {
    return {
        userId,
        user,
        email,
        pNumber,
        gender,
        date,
        isSubs,
        subsType,
        status,
        action
    };
  }