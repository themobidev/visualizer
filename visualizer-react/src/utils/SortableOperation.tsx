import { arrayMove } from "@dnd-kit/sortable";

export const addToGroup = (Obj: any, group: string | number, element: any) => {
    let next = Object.fromEntries(Object.entries(Obj).map((e: any) => [e[0], [...e[1]]]));
    (next[group as keyof typeof next] as any[]).push(element)
    return next as any
}

export const addToGroupAtIndex = (Obj: any, group: string | number, element: any, index: number) => {
    let next = Object.fromEntries(Object.entries(Obj).map((e: any) => [e[0], [...e[1]]]));
    let arr: any[] = [];
    (next[group as keyof typeof next] as any[])?.forEach((el: any, i: number) => {
        if(i == index) {
            arr.push(element)
        }
        arr.push(el)
    })
    next[group as keyof typeof next] = arr
    return next as any
}

export const replaceInGroup = (Obj: any, group: string | number, element: any, index: number) => {
    let next = Object.fromEntries(Object.entries(Obj).map((e: any) => [e[0], [...e[1]]]));
    let arr: any[] = [];
    (next[group as keyof typeof next] as any[])?.forEach((el: any, i: number) => {
        if(i == index) {
            arr.push(element)
            return
        }
        arr.push(el)
    })
    next[group as keyof typeof next] = arr
    return next
}

export const moveInGroup = (Obj: any, group: string | number, from: number, to: number) => {
    let next = Object.fromEntries(Object.entries(Obj).map((e: any) => [e[0], [...e[1]]]));
    let length = (next[group as keyof typeof next] as any[]).length
    if(from == to) {
        return Obj as any
    }
    if(from < 0 || from > length-1) {
        return Obj as any
    }
    if(to < 0 || to > length-1) {
        return Obj as any
    }
    next[group as keyof typeof next] = arrayMove(next[group as keyof typeof next] as any[], from, to)
    return next as any
}