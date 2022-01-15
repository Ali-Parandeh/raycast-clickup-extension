import { List } from "@raycast/api";
import { useSpaces } from "../../hooks/useSpaces";

function TeamProjects({ teamId, teamName }: { teamId: string; teamName: string }) {
  const spaces = useSpaces(teamId);
  return (
    <List throttle={true} isLoading={spaces === undefined} navigationTitle={`${teamName} Team Projects`}>
      {spaces?.map((space) => (
        <List.Item key={space.id} title={space.name} subtitle={space.id} />
      ))}
    </List>
  );
}

export { TeamProjects };
