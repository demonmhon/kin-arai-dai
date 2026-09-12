import React from 'react';
import {
  Container,
  Group,
  Text,
  Button,
  Box,
  ActionIcon,
} from '@mantine/core';
import {
  ChevronDown,
  Info,
  Stethoscope,
  Search,
  Home,
  Target,
} from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  currentDiseaseName: string;
  currentStageBadge?: string;
  isLandingView?: boolean;
  onOpenDiseaseModal: () => void;
  onOpenStageModal: () => void;
  onOpenGuideModal: () => void;
  onGoHome?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentDiseaseName,
  currentStageBadge,
  isLandingView = false,
  onOpenDiseaseModal,
  onOpenStageModal,
  onOpenGuideModal,
  onGoHome,
}) => {
  return (
    <Box
      component="header"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.96)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid #e2e8f0',
        width: '100%',
        maxWidth: '100vw',
      }}
    >
      <Container size={1600} py={{ base: 8, sm: 'sm' }} px={{ base: 10, sm: 'md' }}>
        <Group justify="space-between" wrap="nowrap" gap={6}>
          {/* Logo & Brand Name (Clickable to return to Home) */}
          <Group
            gap={6}
            wrap="nowrap"
            align="center"
            onClick={onGoHome}
            style={{ cursor: onGoHome ? 'pointer' : 'default', flexShrink: 0 }}
            title="กลับสู่หน้าแรก / ข้อมูลเจตนารมณ์"
          >
            <Box
              style={{
                display: 'flex',
                alignItems: 'center',
                flexShrink: 0,
              }}
            >
              <Box visibleFrom="sm">
                <Logo size={36} />
              </Box>
              <Box hiddenFrom="sm">
                <Logo size={30} />
              </Box>
            </Box>

            <Box style={{ flexShrink: 0 }}>
              <Text
                fw={700}
                fz={{ base: 15, sm: 16 }}
                c="slate.9"
                style={{ lineHeight: 1.2, whiteSpace: 'nowrap' }}
              >
                กินอะไรได้?
              </Text>

              {/* Subtitle on Desktop: Full explanatory text */}
              <Text size="xs" c="dimmed" fw={300} visibleFrom="sm" style={{ lineHeight: 1.3 }}>
                ข้อมูลอาหารประกอบการตัดสินใจเบื้องต้น
              </Text>
            </Box>
          </Group>

          {/* Action Buttons */}
          <Group gap={6} wrap="nowrap" align="center" style={{ flexShrink: 0 }}>
            {isLandingView ? (
              /* Landing View Navigation */
              <>
                <Button
                  variant="light"
                  color="emerald"
                  size="xs"
                  radius="xl"
                  onClick={onOpenDiseaseModal}
                  leftSection={<Search size={14} />}
                  styles={{
                    root: {
                      fontWeight: 600,
                      border: '1px solid #a7f3d0',
                      height: 32,
                      paddingLeft: 10,
                      paddingRight: 10,
                    },
                  }}
                >
                  <Text span visibleFrom="sm">
                    เลือกภาวะสุขภาพและระยะ
                  </Text>
                  <Text span hiddenFrom="sm">
                    เลือกภาวะสุขภาพ
                  </Text>
                </Button>

                {/* Guide button: Full on Desktop */}
                <Button
                  variant="default"
                  size="sm"
                  radius="xl"
                  onClick={onOpenGuideModal}
                  visibleFrom="sm"
                  leftSection={<Info size={16} color="#059669" />}
                  styles={{
                    root: {
                      fontWeight: 500,
                      borderColor: '#cbd5e1',
                      paddingLeft: 8,
                      paddingRight: 8,
                      height: 34,
                    },
                  }}
                  title="เกณฑ์โภชนาการ"
                >
                  <Text span fz="xs">
                    เกณฑ์โภชนาการ
                  </Text>
                </Button>

                {/* Guide button: Compact ActionIcon on Mobile */}
                <ActionIcon
                  variant="default"
                  size={32}
                  radius="xl"
                  onClick={onOpenGuideModal}
                  hiddenFrom="sm"
                  styles={{
                    root: {
                      borderColor: '#cbd5e1',
                    },
                  }}
                  title="เกณฑ์โภชนาการ"
                  aria-label="เกณฑ์โภชนาการ"
                >
                  <Info size={16} color="#059669" />
                </ActionIcon>
              </>
            ) : (
              /* Catalog View Navigation */
              <>
                {/* Home / Intention button */}
                {onGoHome && (
                  <Button
                    variant="subtle"
                    color="gray"
                    size="xs"
                    radius="xl"
                    onClick={onGoHome}
                    visibleFrom="md"
                    leftSection={<Home size={14} color="#64748b" />}
                    title="ดูเจตนารมณ์ & แนะนำการใช้งาน"
                  >
                    หน้าแรก
                  </Button>
                )}

                {/* Disease Selector Pill */}
                <Button
                  variant="light"
                  color="emerald"
                  size="xs"
                  radius="xl"
                  onClick={onOpenDiseaseModal}
                  leftSection={<Stethoscope size={14} />}
                  rightSection={<ChevronDown size={12} />}
                  styles={{
                    root: {
                      fontWeight: 600,
                      border: '1px solid #a7f3d0',
                      paddingLeft: 8,
                      paddingRight: 6,
                      height: 32,
                    },
                  }}
                >
                  {/* Desktop disease title */}
                  <Text span visibleFrom="sm" fz="xs">
                    {currentDiseaseName}
                  </Text>
                  {/* Mobile compact disease title */}
                  <Text
                    span
                    hiddenFrom="sm"
                    fz="xs"
                    style={{
                      maxWidth: 85,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      display: 'inline-block',
                    }}
                  >
                    {currentDiseaseName.replace('โรคไตเรื้อรัง (CKD)', 'โรคไต')}
                  </Text>
                </Button>

                {/* Stage Selector Pill (Tablet & Desktop only) */}
                {currentStageBadge && (
                  <Button
                    variant="default"
                    size="sm"
                    radius="xl"
                    onClick={onOpenStageModal}
                    visibleFrom="md"
                    styles={{
                      root: {
                        fontWeight: 600,
                        borderColor: '#cbd5e1',
                        color: '#334155',
                        height: 34,
                      },
                    }}
                  >
                    <Group gap={6} align="center" wrap="nowrap">
                      <Target size={14} color="#059669" />
                      <Text span fz="xs" fw={600}>
                        {currentStageBadge}
                      </Text>
                    </Group>
                  </Button>
                )}

                {/* Quick Knowledge Guide Button */}
                <Button
                  variant="default"
                  size="sm"
                  radius="xl"
                  onClick={onOpenGuideModal}
                  visibleFrom="sm"
                  leftSection={<Info size={16} color="#059669" />}
                  styles={{
                    root: {
                      fontWeight: 500,
                      borderColor: '#cbd5e1',
                      paddingLeft: 8,
                      paddingRight: 8,
                      height: 34,
                    },
                  }}
                  title="เกณฑ์โภชนาการ"
                >
                  <Text span fz="xs">
                    เกณฑ์โภชนาการ
                  </Text>
                </Button>

                <ActionIcon
                  variant="default"
                  size={32}
                  radius="xl"
                  onClick={onOpenGuideModal}
                  hiddenFrom="sm"
                  styles={{
                    root: {
                      borderColor: '#cbd5e1',
                    },
                  }}
                  title="เกณฑ์โภชนาการ"
                  aria-label="เกณฑ์โภชนาการ"
                >
                  <Info size={16} color="#059669" />
                </ActionIcon>
              </>
            )}
          </Group>
        </Group>
      </Container>
    </Box>
  );
};
