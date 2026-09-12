import React, { useState } from 'react';
import {
  Paper,
  Box,
  Group,
  Title,
  Text,
  Badge,
  Button,
  SimpleGrid,
  Card,
  Collapse,
  ThemeIcon,
  Stack,
} from '@mantine/core';
import {
  BookOpen,
  ChevronDown,
  ChevronUp,
  Lightbulb,
  Utensils,
} from 'lucide-react';
import { conditionGuides } from '../data/conditionGuides';
import { getDiseaseLucideIcon } from '../utils/diseaseIcons';

interface ConditionHubHeaderProps {
  conditionId: string;
  conditionName: string;
  stageName?: string;
  stageBadge?: string;
  onOpenStageModal?: () => void;
}

export const ConditionHubHeader: React.FC<ConditionHubHeaderProps> = ({
  conditionId,
  conditionName,
  stageName,
  stageBadge,
  onOpenStageModal,
}) => {
  const [tipsOpen, setTipsOpen] = useState(false);
  const guide = conditionGuides[conditionId];

  if (!guide) {
    return null;
  }

  return (
    <Paper
      p={{ base: 'xs', sm: 'lg' }}
      radius="lg"
      withBorder
      mb={{ base: 'xs', sm: 'lg' }}
      style={{
        background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 50%, #f8fafc 100%)',
        borderColor: '#a7f3d0',
        boxShadow: '0 4px 16px rgba(16, 185, 129, 0.06)',
      }}
    >
      <Group justify="space-between" align="center" wrap="wrap" gap="xs">
        <Group gap="xs" wrap="nowrap" align="center">
          <ThemeIcon size={38} radius="xl" color="emerald" variant="filled" style={{ flexShrink: 0 }}>
            {getDiseaseLucideIcon(conditionId, 20)}
          </ThemeIcon>
          <Box>
            <Group gap="xs" wrap="wrap" mb={2}>
              <Title order={2} fz={{ base: 16, sm: 22 }} fw={700} c="slate.9">
                {conditionName}
              </Title>
              {stageBadge && (
                <Badge
                  size="sm"
                  color="emerald"
                  variant="light"
                  style={{ cursor: onOpenStageModal ? 'pointer' : 'default' }}
                  onClick={onOpenStageModal}
                  title={stageName}
                >
                  {stageBadge}
                </Badge>
              )}
            </Group>
            <Text size="xs" c="dimmed" lh={1.4}>
              {guide.tagline}
            </Text>
          </Box>
        </Group>

        <Button
          size="xs"
          variant={tipsOpen ? 'filled' : 'light'}
          color="emerald"
          radius="xl"
          leftSection={<BookOpen size={14} />}
          rightSection={tipsOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          onClick={() => setTipsOpen(!tipsOpen)}
          styles={{
            root: {
              fontWeight: 600,
            },
          }}
        >
          {tipsOpen ? 'ซ่อนคู่มือ' : 'คำแนะนำเมนู'}
        </Button>
      </Group>

      {/* Quick Core Tip Strip */}
      <Box
        mt={{ base: 8, sm: 'sm' }}
        p={{ base: 8, sm: 'xs' }}
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          borderRadius: 10,
          border: '1px solid #d1fae5',
        }}
      >
        <Group gap={8} wrap="nowrap" align="center">
          <Lightbulb size={16} color="#059669" style={{ flexShrink: 0 }} />
          <Text size="xs" c="slate.8" fw={500} lh={1.4}>
            <Text span fw={700} c="emerald.8">
              หลักสำคัญ:{' '}
            </Text>
            {guide.quickTip}
          </Text>
        </Group>
      </Box>

      {/* Expandable Menu Guidance & Eating Tips */}
      <Collapse in={tipsOpen}>
        <Stack gap="md" mt="md" pt="sm" style={{ borderTop: '1px dashed #a7f3d0' }}>
          <Box>
            <Text size="xs" fw={700} c="emerald.9" mb={6} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <Utensils size={14} /> เมนูนี้กินอย่างไร? (คำแนะนำการปรับเมนูและการปรุง):
            </Text>
            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="sm">
              {guide.menuTips.map((tip, idx) => (
                <Card
                  key={idx}
                  p="sm"
                  radius="md"
                  withBorder
                  style={{
                    backgroundColor: '#ffffff',
                    borderColor: '#e2e8f0',
                  }}
                >
                  <Group gap={6} mb={4}>
                    <Text size="base">{tip.icon}</Text>
                    <Text size="xs" fw={700} c="slate.8">
                      {tip.category}
                    </Text>
                  </Group>
                  <Text size="xs" c="slate.7" lh={1.5}>
                    {tip.tip}
                  </Text>
                </Card>
              ))}
            </SimpleGrid>
          </Box>

          <Box>
            <Text size="xs" fw={700} c="slate.8" mb={4}>
              หลักการรับประทานเบื้องต้น:
            </Text>
            <Stack gap={4}>
              {guide.eatingPrinciples.map((item, idx) => (
                <Group key={idx} gap={6} align="flex-start" wrap="nowrap">
                  <Box
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: '50%',
                      backgroundColor: '#10b981',
                      marginTop: 6,
                      flexShrink: 0,
                    }}
                  />
                  <Text size="xs" c="dimmed" lh={1.4}>
                    {item}
                  </Text>
                </Group>
              ))}
            </Stack>
          </Box>
        </Stack>
      </Collapse>
    </Paper>
  );
};
