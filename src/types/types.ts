import type { ImageProps } from "primevue/image"

export type AppBtnProps = {
    label?: string
    icon?: string
    disabled?: boolean
}
export type AppPanelProps = {
    toggleable?: boolean
    collapsed?: boolean,
    header?: string,
    icon?: string
}



export type SizeObj = { width: number, height?: number }
export type Size = SizeObj | number

export type AppImageProps = {
    src: string
    imageProps?: ImageProps
    size?: Size
}


export type SideBarItem = {
    key: string
    label: string
    icon: string
    to: string
    items: SideBarItem[]
}


export type Person = {
    id: number,
    name: string
    position?: string
    image?: string
    description?: string
    rating? : number
    pricePerJob? : string
}


export type PersonPartialProps = {
    person: Person
    size: Size
}