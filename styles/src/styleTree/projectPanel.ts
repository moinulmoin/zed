import { ColorScheme } from "../themes/common/colorScheme"
import { withOpacity } from "../utils/color"
import { background, border, foreground, text } from "./components"

export default function projectPanel(colorScheme: ColorScheme) {
    let layer = colorScheme.middle

    let baseEntry = {
        height: 24,
        iconColor: foreground(layer, "variant"),
        iconSize: 8,
        iconSpacing: 8,
    }

    let entry = {
        ...baseEntry,
        text: text(layer, "mono", "variant", { size: "sm" }),
        hover: {
            background: background(layer, "variant", "hovered"),
        },
        active: {
            background: background(layer, "active"),
            text: text(layer, "mono", "active", { size: "sm" }),
        },
        activeHover: {
            background: background(layer, "active"),
            text: text(layer, "mono", "active", { size: "sm" }),
        },
    }

    return {
        background: background(layer),
        padding: { left: 12, right: 12, top: 6, bottom: 6 },
        indentWidth: 8,
        entry,
        draggedEntry: {
            ...baseEntry,
            text: text(layer, "mono", "on", { size: "sm" }),
            background: withOpacity(background(layer, "on"), 0.9),
            border: border(layer),
        },
        ignoredEntry: {
            ...entry,
            text: text(layer, "mono", "disabled"),
        },
        cutEntry: {
            ...entry,
            text: text(layer, "mono", "disabled"),
            active: {
                background: background(layer, "active"),
                text: text(layer, "mono", "disabled", { size: "sm" }),
            },
        },
        filenameEditor: {
            background: background(layer, "on"),
            text: text(layer, "mono", "on", { size: "sm" }),
            selection: colorScheme.players[0],
        },
    }
}
