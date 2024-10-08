"use client"

import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

interface ChapterActionProps {
    disabled: boolean;
    courseId: string;
    chapterId: string;
    isPublished: boolean;
}

export const ChapterAction = ({
    disabled,
    courseId,
    chapterId,
    isPublished
} : ChapterActionProps) => {
    return (
        <div className="flex items-center gap-x-2 ">
            <Button
                onClick={() => {}}
                disabled={disabled}
                variant="outline"
                size="sm"
            >
                {isPublished ? "Unpublish" : "Publish"}
            </Button>
            <Button size="sm" >
                <Trash  className="h-4 w-4"/>
            </Button>
        </div>
    )
}