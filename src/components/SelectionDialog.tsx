import React, { useEffect, useState } from 'react';
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
  SimpleGrid,
  Alert,
} from '@mantine/core';
import {
  IconCheck,
  IconArrowLeft,
  IconArrowRight,
  IconInfoCircle,
  IconAlertTriangle,
  IconShieldCheck,
} from '@tabler/icons-react';
import { diseases } from '../data/diseases';
import { kidneyStages } from '../data/kidneyStages';
import { goutStages } from '../data/goutStages';
import { KidneyStageId, GoutStageId } from '../types/food';

type SelectionStep = 1 | 2;

interface SelectionDialogProps {
  opened: boolean;
  onClose: () => void;
  /** Which step to land on when the dialog opens. Defaults to disease selection. */
  initialStep?: SelectionStep;
  selectedDiseaseId: string;
  selectedStage: string;
  /** Preselect a different disease when opening (e.g. clicked from a specific disease card), overriding selectedDiseaseId. */
  initialDiseaseId?: string;
  onConfirm: (diseaseId: string, stageId: string) => void;
}

const KIDNEY_STAGE_KEYS: KidneyStageId[] = ['stage1_2', 'stage3', 'stage4_5_pre', 'dialysis'];
const GOUT_STAGE_KEYS: GoutStageId[] = ['gout_remission', 'gout_flare'];

const KIDNEY_STAGE_LABEL: Record<KidneyStageId, string> = {
  stage1_2: 'ระยะที่ 1 - 2',
  stage3: 'ระยะที่ 3 (3a - 3b)',
  stage4_5_pre: 'ระยะ 4 - 5 (ก่อนฟอกไต)',
  dialysis: 'ฟอกเลือด / ล้างไต',
};

const KIDNEY_THEME: Record<KidneyStageId, { border: string; bg: string; badgeBg: string; badgeColor: string; dot: string }> = {
  stage1_2: { border: '#3b82f6', bg: '#eff6ff', badgeBg: '#dbeafe', badgeColor: '#1e40af', dot: '#3b82f6' },
  stage3: { border: '#f59e0b', bg: '#fffbeb', badgeBg: '#fef3c7', badgeColor: '#92400e', dot: '#f59e0b' },
  stage4_5_pre: { border: '#ef4444', bg: '#fef2f2', badgeBg: '#fee2e2', badgeColor: '#991b1b', dot: '#ef4444' },
  dialysis: { border: '#a855f7', bg: '#faf5ff', badgeBg: '#f3e8ff', badgeColor: '#6b21a8', dot: '#a855f7' },
};

const GOUT_STAGE_LABEL: Record<GoutStageId, string> = {
  gout_remission: 'ช่วงปกติ / ระยะสงบ',
  gout_flare: 'ช่วงข้ออักเสบกำเริบ',
};

const GOUT_THEME: Record<GoutStageId, { border: string; bg: string; badgeBg: string; badgeColor: string; dot: string }> = {
  gout_remission: { border: '#10b981', bg: '#ecfdf5', badgeBg: '#d1fae5', badgeColor: '#065f46', dot: '#10b981' },
  gout_flare: { border: '#ef4444', bg: '#fef2f2', badgeBg: '#fee2e2', badgeColor: '#991b1b', dot: '#ef4444' },
};

/** Keeps the current stage if it's still valid for the newly picked disease, otherwise falls back to a sane default. */
function resolveStageForDisease(diseaseId: string, currentStage: string): string {
  if (diseaseId === 'gout') {
    return currentStage.startsWith('gout') ? currentStage : 'gout_remission';
  }
  if (diseaseId === 'ckd') {
    return currentStage.startsWith('stage') || currentStage === 'dialysis' ? currentStage : 'stage4_5_pre';
  }
  return currentStage;
}

export const SelectionDialog: React.FC<SelectionDialogProps> = ({
  opened,
  onClose,
  initialStep = 1,
  selectedDiseaseId,
  selectedStage,
  initialDiseaseId,
  onConfirm,
}) => {
  const [step, setStep] = useState<SelectionStep>(initialStep);
  const [pendingDiseaseId, setPendingDiseaseId] = useState(initialDiseaseId ?? selectedDiseaseId);
  const [pendingStage, setPendingStage] = useState(selectedStage);

  // Re-sync the dialog's working state every time it is opened, so it always starts
  // from whatever is currently active rather than a stale value from the last time it was open.
  useEffect(() => {
    if (opened) {
      const diseaseId = initialDiseaseId ?? selectedDiseaseId;
      setStep(initialStep);
      setPendingDiseaseId(diseaseId);
      setPendingStage(resolveStageForDisease(diseaseId, selectedStage));
    }
  }, [opened, initialStep, initialDiseaseId, selectedDiseaseId, selectedStage]);

  const isGout = pendingDiseaseId === 'gout';
  const canGoToStage = pendingDiseaseId === 'ckd' || isGout;

  const handleSelectDisease = (id: string) => {
    setPendingDiseaseId(id);
    setPendingStage(resolveStageForDisease(id, pendingStage));
  };

  const handleConfirm = () => {
    onConfirm(pendingDiseaseId, pendingStage);
    onClose();
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={
        <Box>
          <Group gap={6} mb={4}>
            <Badge size="xs" variant={step === 1 ? 'filled' : 'light'} color="emerald" styles={{ root: { textTransform: 'none' } }}>
              1. เลือกโรค
            </Badge>
            <Badge size="xs" variant={step === 2 ? 'filled' : 'light'} color="emerald" styles={{ root: { textTransform: 'none' } }}>
              2. เลือกระยะ
            </Badge>
          </Group>
          <Text fw={700} size="md" c="slate.9">
            {step === 1
              ? 'ขั้นตอนที่ 1: เลือกอาการป่วยหรือโรคประจำตัว'
              : 'ขั้นตอนที่ 2: เลือกระยะ/สภาวะของโรค เพื่อปรับเกณฑ์อาหาร'}
          </Text>
        </Box>
      }
      size={step === 1 ? 'md' : 'lg'}
      radius="xl"
      padding="lg"
      styles={{
        header: {
          borderBottom: '1px solid #f1f5f9',
          paddingBottom: 12,
        },
      }}
    >
      {step === 1 ? (
        <Stack gap="xs" mt="xs">
          <Text size="xs" c="dimmed">
            เลือกโรคเพื่อปรับเกณฑ์การประเมินความปลอดภัยและโภชนาการที่เหมาะสม:
          </Text>

          {diseases.map((d) => {
            const isActive = d.status === 'active';
            const isSelected = pendingDiseaseId === d.id;

            return (
              <Card
                key={d.id}
                p="sm"
                radius="lg"
                withBorder
                onClick={() => {
                  if (isActive) handleSelectDisease(d.id);
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
            <Button
              variant="filled"
              color="emerald"
              size="sm"
              radius="xl"
              rightSection={<IconArrowRight size={16} />}
              onClick={() => setStep(2)}
              disabled={!canGoToStage}
            >
              ถัดไป: เลือกระยะ
            </Button>
          </Group>
        </Stack>
      ) : isGout ? (
        <Stack gap="md" mt="xs">
          <Text size="xs" c="dimmed">
            ในขณะที่ข้ออักเสบกำเริบ (ปวด บวม แดง) ร่างกายจะไวต่อสารพิวรีนสูงมาก จึงต้องคุมอาหารเข้มงวดยิ่งกว่าช่วงปกติ:
          </Text>

          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="sm">
            {GOUT_STAGE_KEYS.map((key) => {
              const item = goutStages[key];
              const isSelected = pendingStage === key;
              const styling = GOUT_THEME[key];

              return (
                <Card
                  key={key}
                  p="md"
                  radius="lg"
                  withBorder
                  onClick={() => setPendingStage(key)}
                  style={{
                    cursor: 'pointer',
                    borderColor: isSelected ? styling.border : '#e2e8f0',
                    borderWidth: isSelected ? 2 : 1,
                    backgroundColor: isSelected ? styling.bg : '#ffffff',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <Group justify="space-between" align="flex-start" mb={4}>
                    <Group gap="xs">
                      {key === 'gout_flare' ? (
                        <IconAlertTriangle size={20} color="#dc2626" />
                      ) : (
                        <IconShieldCheck size={20} color="#059669" />
                      )}
                      <Text size="sm" fw={700} c="slate.9">
                        {GOUT_STAGE_LABEL[key]}
                      </Text>
                    </Group>
                    <Group gap={6}>
                      <Badge
                        size="xs"
                        styles={{
                          root: {
                            backgroundColor: styling.badgeBg,
                            color: styling.badgeColor,
                            fontWeight: 600,
                            textTransform: 'none',
                          },
                        }}
                      >
                        {item.badge}
                      </Badge>
                      {isSelected && <IconCheck size={16} color={styling.dot} />}
                    </Group>
                  </Group>

                  <Text size="xs" c="dimmed" mb="sm" lh={1.4}>
                    {item.summary.slice(0, 95)}...
                  </Text>

                  <Group gap={6} mt="auto">
                    <Box style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: styling.dot }} />
                    <Text size="xs" fw={600} c="slate.8">
                      {item.focus}
                    </Text>
                  </Group>
                </Card>
              );
            })}
          </SimpleGrid>

          <Alert
            icon={pendingStage === 'gout_flare' ? <IconAlertTriangle size={18} /> : <IconShieldCheck size={18} />}
            color={pendingStage === 'gout_flare' ? 'red' : 'emerald'}
            variant="light"
            radius="md"
            styles={{
              root: {
                backgroundColor: pendingStage === 'gout_flare' ? '#fff5f5' : '#f0fdf4',
                borderColor: pendingStage === 'gout_flare' ? '#fed7d7' : '#dcfce7',
              },
              message: { fontSize: 12, color: '#334155', lineHeight: 1.6 },
            }}
          >
            <Text span fw={700} c="slate.9">
              {(goutStages[pendingStage as GoutStageId] || goutStages.gout_remission).name}:{' '}
            </Text>
            <Text span c="slate.7">
              {(goutStages[pendingStage as GoutStageId] || goutStages.gout_remission).summary}
            </Text>
          </Alert>

          <Group justify="space-between" mt="xs">
            <Button variant="default" size="sm" radius="xl" leftSection={<IconArrowLeft size={16} />} onClick={() => setStep(1)}>
              ย้อนกลับ: เลือกโรค
            </Button>
            <Button variant="filled" color="emerald" size="sm" radius="xl" onClick={handleConfirm}>
              ตกลง / นำเกณฑ์นี้ไปใช้
            </Button>
          </Group>
        </Stack>
      ) : (
        <Stack gap="md" mt="xs">
          <Text size="xs" c="dimmed">
            การทำงานของไตในแต่ละระยะส่งผลต่อการกรองแร่ธาตุ (โพแทสเซียม, ฟอสฟอรัส, โซเดียม) และปริมาณโปรตีนที่ร่างกายต้องการ:
          </Text>

          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="sm">
            {KIDNEY_STAGE_KEYS.map((key) => {
              const item = kidneyStages[key];
              const isSelected = pendingStage === key;
              const styling = KIDNEY_THEME[key];

              return (
                <Card
                  key={key}
                  p="md"
                  radius="lg"
                  withBorder
                  onClick={() => setPendingStage(key)}
                  style={{
                    cursor: 'pointer',
                    borderColor: isSelected ? styling.border : '#e2e8f0',
                    borderWidth: isSelected ? 2 : 1,
                    backgroundColor: isSelected ? styling.bg : '#ffffff',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <Group justify="space-between" align="flex-start" mb={4}>
                    <Text size="sm" fw={700} c="slate.9">
                      {KIDNEY_STAGE_LABEL[key]}
                    </Text>
                    <Group gap={6}>
                      <Badge
                        size="xs"
                        styles={{
                          root: {
                            backgroundColor: styling.badgeBg,
                            color: styling.badgeColor,
                            fontWeight: 600,
                            textTransform: 'none',
                          },
                        }}
                      >
                        {item.badge}
                      </Badge>
                      {isSelected && <IconCheck size={16} color={styling.dot} />}
                    </Group>
                  </Group>

                  <Text size="xs" c="dimmed" mb="sm" lh={1.4}>
                    {item.summary.slice(0, 85)}...
                  </Text>

                  <Group gap={6} mt="auto">
                    <Box style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: styling.dot }} />
                    <Text size="xs" fw={600} c="slate.8">
                      {item.focus}
                    </Text>
                  </Group>
                </Card>
              );
            })}
          </SimpleGrid>

          <Alert
            icon={<IconInfoCircle size={18} />}
            color="emerald"
            variant="light"
            radius="md"
            styles={{
              root: { backgroundColor: '#f8fafc', borderColor: '#e2e8f0' },
              message: { fontSize: 12, color: '#334155', lineHeight: 1.6 },
            }}
          >
            <Text span fw={700} c="slate.9">
              {(kidneyStages[pendingStage as KidneyStageId] || kidneyStages.stage4_5_pre).name} (
              {(kidneyStages[pendingStage as KidneyStageId] || kidneyStages.stage4_5_pre).egfr}):{' '}
            </Text>
            <Text span c="slate.7">
              {(kidneyStages[pendingStage as KidneyStageId] || kidneyStages.stage4_5_pre).summary}
            </Text>
          </Alert>

          <Group justify="space-between" mt="xs">
            <Button variant="default" size="sm" radius="xl" leftSection={<IconArrowLeft size={16} />} onClick={() => setStep(1)}>
              ย้อนกลับ: เลือกโรค
            </Button>
            <Button variant="filled" color="emerald" size="sm" radius="xl" onClick={handleConfirm}>
              ตกลง / นำเกณฑ์นี้ไปใช้
            </Button>
          </Group>
        </Stack>
      )}
    </Modal>
  );
};
