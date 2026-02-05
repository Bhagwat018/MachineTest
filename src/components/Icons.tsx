import * as React from "react"
import Svg, { Path } from "react-native-svg"
export const HomeIcon = (props: any) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        viewBox="0 0 16 16"
        {...props}
    >
        <Path
            fill="#000"
            fillRule="evenodd"
            d="M8 0 0 6v2h1v7h3v-5h3v5h8V8h1V6l-2-1.5V1h-3v1.25L8 0Zm1 10h3v3H9v-3Z"
            clipRule="evenodd"
        />
    </Svg>
)

export const ProfileIcon = (props: any) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        viewBox="0 0 24 24"
        {...props}
    >
        <Path
            fill="#000"
            fillRule="evenodd"
            d="M16.5 7.063C16.5 10.258 14.57 13 12 13c-2.572 0-4.5-2.742-4.5-5.938C7.5 3.868 9.16 2 12 2s4.5 1.867 4.5 5.063zM4.102 20.142C4.487 20.6 6.145 22 12 22c5.855 0 7.512-1.4 7.898-1.857a.416.416 0 0 0 .09-.317C19.9 18.944 19.106 15 12 15s-7.9 3.944-7.989 4.826a.416.416 0 0 0 .091.317z"
            clipRule="evenodd"
        />
    </Svg>
)

export const GoogleIcon = (props: any) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={70}
        height={70}
        fill="none"
        viewBox="0 0 32 32"
        {...props}
    >
        <Path
            fill="#4285F4"
            d="M30.001 16.31c0-1.15-.095-1.99-.301-2.861H16.287v5.195h7.873c-.159 1.291-1.016 3.236-2.92 4.542l-.027.174 4.24 3.22.294.029c2.699-2.443 4.254-6.036 4.254-10.298Z"
        />
        <Path
            fill="#34A853"
            d="M16.286 30c3.857 0 7.095-1.245 9.46-3.391l-4.507-3.423c-1.207.825-2.826 1.4-4.953 1.4A8.584 8.584 0 0 1 8.16 18.77l-.167.014-4.41 3.344-.058.157C5.874 26.857 10.7 30 16.286 30Z"
        />
        <Path
            fill="#FBBC05"
            d="M8.16 18.769A8.463 8.463 0 0 1 7.684 16c0-.964.174-1.898.46-2.769l-.008-.185L3.67 9.647l-.146.069A13.786 13.786 0 0 0 2 16c0 2.256.556 4.387 1.524 6.285l4.635-3.516Z"
        />
        <Path
            fill="#EB4335"
            d="M16.286 7.413c2.683 0 4.492 1.136 5.524 2.085l4.032-3.858C23.366 3.384 20.144 2 16.286 2 10.7 2 5.874 5.142 3.524 9.715l4.62 3.516c1.158-3.375 4.365-5.818 8.142-5.818Z"
        />
    </Svg>
)

export const PlusIcon = (props: any) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        viewBox="0 0 24 24"
        {...props}
    >
        <Path
            fill="#323232"
            d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            opacity={0.1}
        />
        <Path
            stroke="#323232"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6M12 9v6"
        />
        <Path
            stroke="#323232"
            strokeWidth={2}
            d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
    </Svg>
)

export const LogOutIcon = (props: any) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        viewBox="0 0 24 24"
        {...props}
    >
        <Path
            fill="#1C274C"
            fillRule="evenodd"
            d="M16.125 12a.75.75 0 0 0-.75-.75H4.402l1.961-1.68a.75.75 0 1 0-.976-1.14l-3.5 3a.75.75 0 0 0 0 1.14l3.5 3a.75.75 0 1 0 .976-1.14l-1.96-1.68h10.972a.75.75 0 0 0 .75-.75Z"
            clipRule="evenodd"
        />
        <Path
            fill="#1C274C"
            d="M9.375 8c0 .702 0 1.053.169 1.306a1 1 0 0 0 .275.275c.253.169.604.169 1.306.169h4.25a2.25 2.25 0 0 1 0 4.5h-4.25c-.702 0-1.053 0-1.306.168a1 1 0 0 0-.275.276c-.169.253-.169.604-.169 1.306 0 2.828 0 4.243.879 5.121.878.879 2.292.879 5.12.879h1c2.83 0 4.243 0 5.122-.879.879-.878.879-2.293.879-5.121V8c0-2.828 0-4.243-.879-5.121C20.617 2 19.203 2 16.375 2h-1c-2.829 0-4.243 0-5.121.879-.879.878-.879 2.293-.879 5.121Z"
        />
    </Svg>
)

export const MinusIcon = (props: any) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        viewBox="0 0 24 24"
        {...props}
    >
        <Path
            fill="#1C274C"
            d="M15 12.75a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5h6Z"
        />
        <Path
            fill="#1C274C"
            fillRule="evenodd"
            d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25ZM2.75 12a9.25 9.25 0 1 1 18.5 0 9.25 9.25 0 0 1-18.5 0Z"
            clipRule="evenodd"
        />
    </Svg>
)






