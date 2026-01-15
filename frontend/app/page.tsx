import { Card, CardHeader, CardTitle, CardContent} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
    <Card className="w-full max-w-sm shadow-lg rounded-2xl">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">PRPay</CardTitle>
        {/* TODO: Add an image instead of a text. */}
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Button className="w-full flex items-center gap-2 hover:cursor-pointer" variant="outline">
        <Github className="h-5 w-5" />
          Login with GitHub
        </Button>
      </CardContent>
    </Card>
  </div>
  );
}
