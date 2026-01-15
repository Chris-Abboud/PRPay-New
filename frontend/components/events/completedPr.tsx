import { MergeIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from "../ui/card";

export default function CompletedPR(){
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>PR Title</CardTitle>
                <CardDescription>PR Date</CardDescription>
                <CardAction>
                    <Button variant="outline" className="hover:cursor-pointer">
                        <MergeIcon />
                        View on GitHub
                    </Button>
                </CardAction>
            </CardHeader>
        </Card>
    )
}