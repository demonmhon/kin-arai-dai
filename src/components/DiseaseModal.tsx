import React from 'react';
import {
  Modal,
  Box,
  Group,
  Text,
  Badge,
  Button,
  Stack,
  Card,
  ThemeIcon,
} from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import { diseases } from '../data/diseases';

interface DiseaseModalProps {
  opened: boolean;
  onClose: () => void;
  selectedDiseaseId: string;
  onSelectDisease: (id: string) => void;
}

export const DiseaseModal: React.FC<DiseaseModalProps> = ({
  opened,
  onClose,
  selectedDiseaseId,
  onSelectDisease,
}) => {
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={
        <Box>
          <Badge size="xs" variant="light" color="emerald" mb={4}>
            Health Profile
          </Badge>
          <Text fw={700} size="md" c="slate.9">
            เลือกอาการป่วยหรือโรคประจำตัว
          </Text>
        </Box>
      }
      size="md"
      radius="xl"
      padding="md"
      styles={{
        header: {
          borderBottom: '1px solid #f1f5f9',
          paddingBottom: 12,
        },
      }}
    >
      <Stack gap="xs" mt="xs">
        <Text size="xs" c="dimmed">
          เลือกโรคเพื่อปรับเกณฑ์การประเมินความปลอดภัยและโภชนาการที่เหมาะสม:
        </Text>

        {diseases.map((d) => {
          const isActive = d.status === 'active';
          const isSelected = selectedDiseaseId === d.id;

          return (
            <Card
              key={d.id}
              p="sm"
              radius="lg"
              withBorder
              onClick={() => {
                if (isActive) {
                  onSelectDisease(d.id);
                  onClose();
                }
              }}
              style={{
                cursor: isActive ? 'pointer' : 'not-allowed',
                backgroundColor: isSelected ? '#ecfdf5' : isActive ? '#ffffff' : '#f8fafc',
                borderColor: isSelected ? '#10b981' : '#e2e8f0',
                borderWidth: isSelected ? 2 : 1,
                opacity: isActive ? 1 : 0.7,
                transition: 'all 0.15s ease',
              }}
            >
              <Group justify="space-between" align="center" wrap="nowrap">
                <Group gap="sm" wrap="nowrap">
                  <ThemeIcon
                    size={38}
                    radius="md"
                    variant={isSelected ? 'filled' : 'light'}
                    color={isActive ? 'emerald' : 'gray'}
                    style={{ fontSize: 20 }}
                  >
                    {d.icon}
                  </ThemeIcon>
                  <Box>
                    <Group gap="xs">
                      <Text size="xs" fw={700} c="slate.9">
                        {d.name}
                      </Text>
                      <Badge
                        size="xs"
                        variant={isActive ? 'filled' : 'light'}
                        color={isActive ? 'emerald' : 'gray'}
                        styles={{ root: { textTransform: 'none' } }}
                      >
                        {d.badgeText}
                      </Badge>
                    </Group>
                    <Text size="11px" c="dimmed" mt={2} lineClamp={2}>
                      {d.summary}
                    </Text>
                  </Box>
                </Group>

                {isSelected && <IconCheck size={18} color="#059669" />}
              </Group>
            </Card>
          );
        })}

        <Group justify="flex-end" mt="md">
          <Button variant="filled" color="dark" size="xs" radius="xl" onClick={onClose}>
            ตกลง
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
};
