import { Detail } from "@raycast/api";
import { useSpaces } from "../../hooks/useSpaces";

function TeamProjects({ teamId, teamName }: { teamId: string; teamName: string }) {
  const spaces = useSpaces(teamId);
  console.log(spaces);
  return <Detail navigationTitle={`${teamName} Team Projects`} markdown={`${teamName} Team Projects`} />;
}

export { TeamProjects };
