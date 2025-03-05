import { useSortable } from "@dnd-kit/sortable"
import {CSS} from '@dnd-kit/utilities';
import React from "react";

export const GrayToplineElement: React.FC<any> = (prop) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({
        id: prop.id
    })

    const style = {
        width: "100%",
        height: "200px",
        backgroundColor: "red",
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            {prop.id}
        </div>
    )
}

export const DarkToplineElement: React.FC<any> = (prop) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({
        id: prop.id,
    })

    const style = {
        width: "100%",
        height: "200px",
        backgroundColor: "green",
        transform: CSS.Transform.toString(transform),
        transition,
      };

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            {prop.id}
        </div>
    )
}

export default {
    GrayToplineElement,
    DarkToplineElement,
}