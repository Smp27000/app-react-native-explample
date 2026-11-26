import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
        }}
      />
      <Tabs.Screen
        name="donadores"
        options={{
          title: 'Donadores',
        }}
      />
      <Tabs.Screen
        name="patrocinadores"
        options={{
          title: 'Patrocinadores',
        }}
      />
      <Tabs.Screen
        name="donados"
        options={{
          title: 'Donados',
        }}
      />
      <Tabs.Screen
        name="users"
        options={{
          title: 'Usuarios',
        }}
      />
    </Tabs>
  );
}
