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
  Check,
  ArrowLeft,
  ArrowRight,
  Info,
  AlertTriangle,
  ShieldCheck,
  Save,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { diseases } from '../data/diseases';
import { kidneyStages } from '../data/kidneyStages';
import { goutStages } from '../data/goutStages';
import { cholecystectomyStages } from '../data/cholecystectomyStages';
import { KidneyStageId, GoutStageId, CholecystectomyStageId } from '../types/food';
import { getDiseaseLucideIcon } from '../utils/diseaseIcons';
import { Logo } from './Logo';
import { OnboardingReason } from '../config/version';

type SelectionStep = 1 | 2;

export interface SelectionDialogProps {
  opened: boolean;
  onClose: () => void;
  /** Which step to land on when the dialog opens. Defaults to disease selection. */
  initialStep?: SelectionStep;
  selectedDiseaseId: string;
  selectedStage: string;
  /** Preselect a different disease when opening (e.g. clicked from a specific disease card), overriding selectedDiseaseId. */
  initialDiseaseId?: string;
  onConfirm: (diseaseId: string, stageId: string) => void;
  /** When true, renders onboarding / first-visit copy and welcoming banner */
  isOnboarding?: boolean;
  /** Specific onboarding trigger reason (e.g. first visit vs. new version update) */
  onboardingReason?: OnboardingReason;
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

const CHOLE_STAGE_KEYS: CholecystectomyStageId[] = ['chole_maintenance', 'chole_recovery'];

const CHOLE_STAGE_LABEL: Record<CholecystectomyStageId, string> = {
  chole_maintenance: 'ระยะทั่วไป / ปรับตัวแล้ว',
  chole_recovery: 'ระยะพักฟื้นแรกเริ่ม / ท้องเสียง่าย',
};

const CHOLE_THEME: Record<CholecystectomyStageId, { border: string; bg: string; badgeBg: string; badgeColor: string; dot: string }> = {
  chole_maintenance: { border: '#10b981', bg: '#ecfdf5', badgeBg: '#d1fae5', badgeColor: '#065f46', dot: '#10b981' },
  chole_recovery: { border: '#f59e0b', bg: '#fffbeb', badgeBg: '#fef3c7', badgeColor: '#92400e', dot: '#f59e0b' },
};

/** Keeps the current stage if it's still valid for the newly picked disease, otherwise falls back to a sane default. */
function resolveStageForDisease(diseaseId: string, currentStage: string): string {
  if (diseaseId === 'gout') {
    return currentStage.startsWith('gout') ? currentStage : 'gout_remission';
  }
  if (diseaseId === 'cholecystectomy') {
    return currentStage.startsWith('chole') ? currentStage : 'chole_maintenance';
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
  isOnboarding = false,
  onboardingReason = null,
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
  const isChole = pendingDiseaseId === 'cholecystectomy';
  const canGoToStage = pendingDiseaseId === 'ckd' || isGout || isChole;
  const currentDisease = diseases.find((d) => d.id === pendingDiseaseId) || diseases[0];

  const handleSelectDisease = (id: string) => {
    setPendingDiseaseId(id);
    setPendingStage(resolveStageForDisease(id, pendingStage));
  };

  const handleConfirm = () => {
    onConfirm(pendingDiseaseId, pendingStage);
    onClose();
  };

  const renderStep2Footer = () => (
    <Stack gap="xs" mt="xs">
      <Group justify="space-between">
        <Button
          variant="default"
          size="sm"
          radius="xl"
          leftSection={<ArrowLeft size={16} />}
          onClick={() => setStep(1)}
        >
          ย้อนกลับ: เลือกภาวะสุขภาพ
        </Button>
        <Button
          variant="filled"
          color="emerald"
          size="sm"
          radius="xl"
          onClick={handleConfirm}
          leftSection={isOnboarding ? <Save size={16} /> : undefined}
          styles={{
            root: {
              fontWeight: 600,
            },
          }}
        >
          {isOnboarding ? 'บันทึกและเริ่มต้นค้นหาอาหาร' : 'ตกลง / นำเกณฑ์นี้ไปใช้'}
        </Button>
      </Group>

      {isOnboarding && (
        <Stack gap={6} mt={2}>
          <Button variant="subtle" color="gray" size="xs" onClick={onClose}>
            ยังไม่เลือกตอนนี้
          </Button>
          <Group justify="center" gap={6} c="dimmed">
            <ShieldCheck size={14} />
            <Text size="11px" c="dimmed">
              บันทึกข้อมูลเฉพาะในเบราว์เซอร์นี้ (คุณสามารถกดเปลี่ยนภาวะสุขภาพและระยะได้ตลอดเวลาที่แถบด้านบน)
            </Text>
          </Group>
        </Stack>
      )}
    </Stack>
  );

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      closeOnClickOutside={true}
      withCloseButton={true}
      size={isOnboarding ? 'lg' : step === 1 ? 'md' : 'lg'}
      radius="xl"
      padding="lg"
      title={
        isOnboarding ? (
          <Group gap="xs">
            <Logo size={28} />
            <Box>
              <Text fw={700} size="sm" c="slate.9">
                กินอะไรได้?
              </Text>
            </Box>
          </Group>
        ) : (
          <Box>
            <Group gap={6} mb={4}>
              <Badge
                size="xs"
                variant={step === 1 ? 'filled' : 'light'}
                color="emerald"
                styles={{ root: { textTransform: 'none' } }}
              >
                1. เลือกภาวะสุขภาพ
              </Badge>
              <Badge
                size="xs"
                variant={step === 2 ? 'filled' : 'light'}
                color="emerald"
                styles={{ root: { textTransform: 'none' } }}
              >
                2. เลือกระยะ
              </Badge>
            </Group>
            <Text fw={700} size="md" c="slate.9">
              {step === 1
                ? 'ขั้นตอนที่ 1: เลือกภาวะสุขภาพหรืออาการที่ต้องการดูแล'
                : 'ขั้นตอนที่ 2: เลือกระยะหรือสภาวะ เพื่อปรับเกณฑ์อาหาร'}
            </Text>
          </Box>
        )
      }
      styles={{
        header: {
          borderBottom: '1px solid #f1f5f9',
          paddingBottom: 12,
        },
      }}
    >
      {/* Onboarding Welcome / New Version Announcement Banner */}
      {isOnboarding && (
        <Box style={{ textAlign: 'center' }} pb="sm">
          <Badge size="sm" variant="light" color="emerald" mb={6}>
            {onboardingReason === 'new_version'
              ? '✨ อัปเดตใหม่ / อัปเกรดเวอร์ชัน'
              : 'ยินดีต้อนรับ / เริ่มต้นใช้งาน'}
          </Badge>
          <Text fw={700} fz={{ base: 17, sm: 19 }} c="slate.9" mb={4}>
            {step === 1
              ? 'คุณหรือคนที่คุณดูแล ต้องการเลือกดูข้อมูลสำหรับภาวะสุขภาพใด?'
              : `คุณหรือคนที่คุณดูแล อยู่ในระยะหรือสภาวะใดของ${currentDisease.name}?`}
          </Text>
          <Text size="xs" c="dimmed" style={{ maxWidth: 540, margin: '0 auto', lineHeight: 1.6 }}>
            {step === 1 ? (
              <>
                อาหารแต่ละชนิดส่งผลต่อร่างกายต่างกันในแต่ละภาวะสุขภาพ
                กรุณาเลือกภาวะสุขภาพและระยะ เพื่อแสดงเกณฑ์ไฟจราจร{' '}
                <Text span fw={600} c="#10b981" style={{ display: 'inline-flex', alignItems: 'center', gap: 3 }}>
                  <CheckCircle2 size={13} /> เขียว
                </Text>{' '}
                •{' '}
                <Text span fw={600} c="#f59e0b" style={{ display: 'inline-flex', alignItems: 'center', gap: 3 }}>
                  <AlertCircle size={13} /> เหลือง
                </Text>{' '}
                •{' '}
                <Text span fw={600} c="#ef4444" style={{ display: 'inline-flex', alignItems: 'center', gap: 3 }}>
                  <AlertTriangle size={13} /> แดง
                </Text>{' '}
                ที่ปลอดภัยและเหมาะสมสำหรับคุณ
              </>
            ) : (
              'แต่ละระยะมีความต้องการสารอาหารและการจำกัดแร่ธาตุต่างกัน เลือกระยะเพื่อปรับเกณฑ์ให้ตรงกับคุณมากที่สุด'
            )}
          </Text>

          <Group justify="center" gap={6} mt="xs">
            <Badge
              size="xs"
              variant={step === 1 ? 'filled' : 'light'}
              color="emerald"
              styles={{ root: { textTransform: 'none' } }}
            >
              1. เลือกภาวะสุขภาพ
            </Badge>
            <Badge
              size="xs"
              variant={step === 2 ? 'filled' : 'light'}
              color="emerald"
              styles={{ root: { textTransform: 'none' } }}
            >
              2. เลือกระยะ / สภาวะ
            </Badge>
          </Group>
        </Box>
      )}

      {step === 1 ? (
        <Stack gap="xs" mt={isOnboarding ? 0 : 'xs'}>
          {!isOnboarding && (
            <Text size="xs" c="dimmed">
              เลือกภาวะสุขภาพเพื่อปรับเกณฑ์การประเมินความปลอดภัยและโภชนาการที่เหมาะสม:
            </Text>
          )}

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
                    >
                      {getDiseaseLucideIcon(d.id, 20)}
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

                  {isSelected && <Check size={18} color="#059669" />}
                </Group>
              </Card>
            );
          })}

          <Group justify={isOnboarding ? 'space-between' : 'flex-end'} mt="md">
            {isOnboarding && (
              <Button
                variant="subtle"
                color="gray"
                size="xs"
                onClick={onClose}
              >
                ยังไม่เลือกตอนนี้ (เข้าสู่หน้าหลัก)
              </Button>
            )}
            <Button
              variant="filled"
              color="emerald"
              size="sm"
              radius="xl"
              rightSection={<ArrowRight size={16} />}
              onClick={() => setStep(2)}
              disabled={!canGoToStage}
            >
              ถัดไป: เลือกระยะ
            </Button>
          </Group>

          {isOnboarding && (
            <Group justify="center" gap={6} mt={4} c="dimmed">
              <ShieldCheck size={14} />
              <Text size="11px" c="dimmed">
                บันทึกข้อมูลเฉพาะในเบราว์เซอร์นี้ (คุณสามารถกดเปลี่ยนภาวะสุขภาพและระยะได้ตลอดเวลาที่แถบด้านบน)
              </Text>
            </Group>
          )}
        </Stack>
      ) : isChole ? (
        <Stack gap="md" mt={isOnboarding ? 0 : 'xs'}>
          <Text size="xs" c="dimmed">
            ผู้ตัดถุงน้ำดีส่วนใหญ่กลับไปทานอาหารได้ปกติ เป็นเรื่องความทนทานเฉพาะบุคคล (Individual tolerance) แนะนำให้กระจายการทานไขมันเป็นมื้อเล็กๆ หลายมื้อ แทนการกินไขมันก้อนใหญ่ทีเดียว:
          </Text>

          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="sm">
            {CHOLE_STAGE_KEYS.map((key) => {
              const item = cholecystectomyStages[key];
              const isSelected = pendingStage === key;
              const styling = CHOLE_THEME[key];

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
                      {key === 'chole_recovery' ? (
                        <AlertTriangle size={20} color="#d97706" />
                      ) : (
                        <ShieldCheck size={20} color="#059669" />
                      )}
                      <Text size="sm" fw={700} c="slate.9">
                        {CHOLE_STAGE_LABEL[key]}
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
                      {isSelected && <Check size={16} color={styling.dot} />}
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
            icon={<Info size={18} />}
            color="emerald"
            variant="light"
            radius="md"
            styles={{
              root: { backgroundColor: '#f8fafc', borderColor: '#e2e8f0' },
              message: { fontSize: 12, color: '#334155', lineHeight: 1.6 },
            }}
          >
            <Text span fw={700} c="slate.9">
              {(cholecystectomyStages[pendingStage as CholecystectomyStageId] || cholecystectomyStages.chole_maintenance).name}:{' '}
            </Text>
            <Text span c="slate.7">
              {(cholecystectomyStages[pendingStage as CholecystectomyStageId] || cholecystectomyStages.chole_maintenance).summary}
            </Text>
          </Alert>

          {renderStep2Footer()}
        </Stack>
      ) : isGout ? (
        <Stack gap="md" mt={isOnboarding ? 0 : 'xs'}>
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
                        <AlertTriangle size={20} color="#dc2626" />
                      ) : (
                        <ShieldCheck size={20} color="#059669" />
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
                      {isSelected && <Check size={16} color={styling.dot} />}
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
            icon={pendingStage === 'gout_flare' ? <AlertTriangle size={18} /> : <ShieldCheck size={18} />}
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

          {renderStep2Footer()}
        </Stack>
      ) : (
        <Stack gap="md" mt={isOnboarding ? 0 : 'xs'}>
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
                      {isSelected && <Check size={16} color={styling.dot} />}
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
            icon={<Info size={18} />}
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

          {renderStep2Footer()}
        </Stack>
      )}
    </Modal>
  );
};
