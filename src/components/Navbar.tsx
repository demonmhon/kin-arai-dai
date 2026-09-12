import React from 'react';
import { Container, Group, Text, Button, Box, ThemeIcon } from '@mantine/core';
import { IconChevronDown, IconInfoCircle, IconStethoscope } from '@tabler/icons-react';

interface NavbarProps {
  currentDiseaseName: string;
  currentStageBadge?: string;
  onOpenDiseaseModal: () => void;
  onOpenStageModal: () => void;
  onOpenGuideModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentDiseaseName,
  currentStageBadge,
  onOpenDiseaseModal,
  onOpenStageModal,
  onOpenGuideModal,
}) => {
  return (
    <Box
      component="header"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid #e2e8f0',
      }}
    >
      <Container size="lg" py="sm">
        <Group justify="space-between" wrap="nowrap">
          {/* Logo & Brand Name */}
          <Group gap="xs" wrap="nowrap">
            <ThemeIcon
              size={40}
              radius="lg"
              variant="gradient"
              gradient={{ from: 'emerald.6', to: 'teal.5', deg: 45 }}
              style={{ fontSize: 20 }}
            >
              🥗
            </ThemeIcon>
            <Box>
              <Text fw={700} size="md" c="slate.9" style={{ lineHeight: 1.2 }}>
                กินอะไรได้บ้าง?
              </Text>
              <Text size="xs" c="dimmed" fw={300}>
                ข้อมูลอาหารประกอบการตัดสินใจเบื้องต้น
              </Text>
            </Box>
          </Group>

          {/* Action Buttons */}
          <Group gap="xs" wrap="nowrap">
            {/* Disease Selector Pill */}
            <Button
              variant="light"
              color="emerald"
              size="sm"
              radius="xl"
              onClick={onOpenDiseaseModal}
              leftSection={<IconStethoscope size={16} />}
              rightSection={<IconChevronDown size={14} />}
              styles={{
                root: {
                  fontWeight: 600,
                  border: '1px solid #a7f3d0',
                },
              }}
            >
              {currentDiseaseName}
            </Button>

            {/* Stage Selector Pill (if provided) */}
            {currentStageBadge && (
              <Button
                variant="default"
                size="sm"
                radius="xl"
                onClick={onOpenStageModal}
                visibleFrom="xs"
                styles={{
                  root: {
                    fontWeight: 600,
                    borderColor: '#cbd5e1',
                    color: '#334155',
                  },
                }}
              >
                <Text span fz="xs" fw={600}>
                  🎯 {currentStageBadge}
                </Text>
              </Button>
            )}

            {/* Quick Knowledge Guide Button */}
            <Button
              variant="default"
              size="sm"
              radius="xl"
              onClick={onOpenGuideModal}
              leftSection={<IconInfoCircle size={16} color="#059669" />}
              styles={{
                root: {
                  fontWeight: 500,
                  borderColor: '#cbd5e1',
                },
              }}
            >
              <Text span visibleFrom="xs">
                เกณฑ์โภชนาการ
              </Text>
            </Button>
          </Group>
        </Group>
      </Container>
    </Box>
  );
};
