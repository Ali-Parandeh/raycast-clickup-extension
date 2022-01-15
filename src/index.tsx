import { Icon, List } from "@raycast/api";
import { useEffect, useState } from "react";
import axios from "axios";
interface TeamResponse {
  teams: TeamsItem[];
}
interface TeamsItem {
  id: string;
  name: string;
  color: string;
  avatar: null;
  members: null;
}

const base = "https://api.clickup.com/api/v2";

export default function Command() {
  const [teams, setTeams] = useState<TeamsItem[]>([]);

  useEffect(() => {
    async function getTeams() {
      try {
        const response = await axios.get<TeamResponse>(`${base}/team`, {
          headers: {
            Authorization: ``,
          },
        });
        setTeams(response.data?.teams ?? []);
      } catch (error) {
        console.error(error);
      }
    }

    getTeams().then((r) => r);
  });

  return (
    <List navigationTitle="Search Teams">
      {teams.map((team, index) => (
        <List.Item key={index} icon={Icon.Person} title={team.name} />
      ))}
    </List>
  );
}
