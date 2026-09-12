import React from 'react';
import {
  Container,
  Group,
  Text,
  Button,
  Box,
} from '@mantine/core';
import {
  IconChevronDown,
  IconInfoCircle,
  IconStethoscope,
  IconSearch,
  IconHome,
} from '@tabler/icons-react';
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
      }}
    >
      <Container size="lg" py={{ base: 'xs', sm: 'sm' }} px={{ base: 'sm', sm: 'md' }}>
        <Group justify="space-between" wrap="nowrap" gap="xs">
          {/* Logo & Brand Name (Clickable to return to Home) */}
          <Group
            gap="xs"
            wrap="nowrap"
            align="center"
            onClick={onGoHome}
            style={{ cursor: onGoHome ? 'pointer' : 'default' }}
            title="กลับสู่หน้าแรก / ข้อมูลเจตนารมณ์"
          >
            <Box
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Logo size={36} />
            </Box>

            <Box>
              <Group gap={6} align="center" wrap="nowrap">
                <Text
                  fw={700}
                  fz={{ base: 15, sm: 16 }}
                  c="slate.9"
                  style={{ lineHeight: 1.2, whiteSpace: 'nowrap' }}
                >
                  กินอะไรได้บ้าง?
                </Text>
              </Group>

              {/* Subtitle on Desktop: Full explanatory text */}
              <Text size="xs" c="dimmed" fw={300} visibleFrom="sm" style={{ lineHeight: 1.3 }}>
                ข้อมูลอาหารประกอบการตัดสินใจเบื้องต้น
              </Text>

              {/* Subtitle on Mobile: Compact & clean, prevents overflow */}
              <Text
                size="10px"
                c="dimmed"
                fw={400}
                hiddenFrom="sm"
                style={{ whiteSpace: 'nowrap', lineHeight: 1.2 }}
              >
                เช็กอาหารเฉพาะโรค
              </Text>
            </Box>
          </Group>

          {/* Action Buttons */}
          <Group gap="xs" wrap="nowrap" align="center">
            {isLandingView ? (
              /* Landing View Navigation */
              <>
                <Button
                  variant="light"
                  color="emerald"
                  size="sm"
                  radius="xl"
                  onClick={onOpenDiseaseModal}
                  leftSection={<IconSearch size={15} />}
                  styles={{
                    root: {
                      fontWeight: 600,
                      border: '1px solid #a7f3d0',
                      height: 34,
                    },
                  }}
                >
                  <Text span visibleFrom="xs">
                    เลือกโรคและระยะ
                  </Text>
                  <Text span hiddenFrom="xs">
                    เลือกโรคและระยะ
                  </Text>
                </Button>

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
                      paddingLeft: 8,
                      paddingRight: 8,
                      height: 34,
                    },
                  }}
                  title="เกณฑ์โภชนาการ"
                >
                  <Text span visibleFrom="sm" fz="xs">
                    เกณฑ์โภชนาการ
                  </Text>
                </Button>
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
                    leftSection={<IconHome size={14} color="#64748b" />}
                    title="ดูเจตนารมณ์ & แนะนำการใช้งาน"
                  >
                    หน้าแรก
                  </Button>
                )}

                {/* Disease Selector Pill */}
                <Button
                  variant="light"
                  color="emerald"
                  size="sm"
                  radius="xl"
                  onClick={onOpenDiseaseModal}
                  leftSection={<IconStethoscope size={15} />}
                  rightSection={<IconChevronDown size={13} />}
                  styles={{
                    root: {
                      fontWeight: 600,
                      border: '1px solid #a7f3d0',
                      paddingLeft: 10,
                      paddingRight: 8,
                      height: 34,
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
                      maxWidth: 95,
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
                      paddingLeft: 8,
                      paddingRight: 8,
                      height: 34,
                    },
                  }}
                  title="เกณฑ์โภชนาการ"
                >
                  <Text span visibleFrom="sm" fz="xs">
                    เกณฑ์โภชนาการ
                  </Text>
                </Button>
              </>
            )}
          </Group>
        </Group>
      </Container>
    </Box>
  );
};
