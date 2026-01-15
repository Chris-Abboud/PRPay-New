import { HandCoins } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from "../ui/card";

export default function ClaimPR(){
    return (
        <Card className="w-full bg-green-300/20">
            <CardHeader>
                <CardTitle>PR Title</CardTitle>
                <CardDescription>PR Date</CardDescription>
                <CardAction>
                    <Button variant="outline" className="hover:cursor-pointer">
                        <HandCoins />
                        Redeem $5.00
                    </Button>
                </CardAction>
            </CardHeader>
        </Card>
    )
}