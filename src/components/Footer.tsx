import React from 'react';
import {
  Box,
  Container,
  Text,
  Group,
  Anchor,
  Grid,
  Stack,
  Divider,
  Badge,
  Paper,
  Button,
} from '@mantine/core';
import { Link } from 'react-router-dom';
import {
  IconBrandGithub,
  IconScale,
  IconCreativeCommons,
  IconExternalLink,
  IconHeart,
  IconShieldCheck,
  IconBug,
  IconGitPullRequest,
  IconBook,
} from '@tabler/icons-react';
import { Logo } from './Logo';

export interface FooterProps {
  onOpenGuideModal?: () => void;
  onOpenPrivacyModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenGuideModal, onOpenPrivacyModal }) => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      style={{
        backgroundColor: '#ffffff',
        borderTop: '1px solid #e2e8f0',
      }}
      pt={{ base: 36, sm: 48 }}
      pb={{ base: 24, sm: 32 }}
      mt="xl"
    >
      <Container size={1600}>
        {/* Main Footer Content Grid */}
        <Grid gutter={{ base: 'xl', md: 40 }} mb={{ base: 'xl', md: 32 }}>
          {/* Col 1: Brand & Purpose */}
          <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
            <Group gap="xs" align="center" mb="xs">
              <Logo size={34} />
              <Box>
                <Text fw={700} fz={16} c="slate.9" style={{ color: '#0f172a', lineHeight: 1.2 }}>
                  กินอะไรได้?
                </Text>
                <Text fz="11px" fw={600} c="emerald.7" style={{ lineHeight: 1.2 }}>
                  Kin Arai Dai — Food Safety Checker
                </Text>
              </Box>
            </Group>

            <Text size="xs" c="dimmed" lh={1.65} mb="md" style={{ maxWidth: 380 }}>
              ระบบสืบค้นข้อมูลความปลอดภัยของอาหารตามภาวะทางสุขภาพ เช่น โรคไตเรื้อรัง โรคเกาต์ ภาวะหลังผ่าตัดถุงน้ำดี และผู้ที่ใส่ใจดูแลสุขภาพ เพื่อเป็นแนวทางเบื้องต้นในการเลือกรับประทานอาหารอย่างเหมาะสมและปลอดภัย
            </Text>

            <Group gap="xs" wrap="wrap">
              <Badge
                size="sm"
                variant="light"
                color="emerald"
                leftSection={<IconBrandGithub size={12} />}
              >
                Open Source
              </Badge>
              <Badge
                size="sm"
                variant="light"
                color="teal"
                leftSection={<IconCreativeCommons size={12} />}
              >
                CC BY-SA 4.0
              </Badge>
              <Badge size="sm" variant="outline" color="gray">
                เพื่อประโยชน์สาธารณะ
              </Badge>
            </Group>
          </Grid.Col>

          {/* Col 2: Navigation & Content */}
          <Grid.Col span={{ base: 6, sm: 3, md: 2 }}>
            <Text fw={700} size="xs" tt="uppercase" c="dimmed" mb="sm" style={{ letterSpacing: '0.6px' }}>
              ข้อมูล & บริการ
            </Text>
            <Stack gap={8}>
              <Anchor
                component={Link}
                to="/"
                size="xs"
                c="gray.7"
                style={{ textDecoration: 'none', transition: 'color 0.15s' }}
              >
                หน้าแรก (Home)
              </Anchor>
              <Anchor
                component={Link}
                to="/references"
                size="xs"
                c="gray.7"
                style={{ textDecoration: 'none', transition: 'color 0.15s' }}
              >
                แหล่งข้อมูลอ้างอิง (References)
              </Anchor>
              {onOpenGuideModal && (
                <Text
                  component="button"
                  type="button"
                  onClick={onOpenGuideModal}
                  size="xs"
                  c="gray.7"
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    margin: 0,
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontFamily: 'inherit',
                  }}
                >
                  เกณฑ์โภชนาการและระยะโรค
                </Text>
              )}
              {onOpenPrivacyModal && (
                <Text
                  component="button"
                  type="button"
                  onClick={onOpenPrivacyModal}
                  size="xs"
                  c="gray.7"
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    margin: 0,
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontFamily: 'inherit',
                  }}
                >
                  นโยบายความเป็นส่วนตัว (Privacy)
                </Text>
              )}
            </Stack>
          </Grid.Col>

          {/* Col 3: Open Source & Community */}
          <Grid.Col span={{ base: 6, sm: 3, md: 3 }}>
            <Text fw={700} size="xs" tt="uppercase" c="dimmed" mb="sm" style={{ letterSpacing: '0.6px' }}>
              โอเพนซอร์ส & ชุมชน
            </Text>
            <Stack gap={8}>
              <Anchor
                href="https://github.com/demonmhon/kin-arai-dai"
                target="_blank"
                rel="noopener noreferrer"
                size="xs"
                c="gray.7"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  textDecoration: 'none',
                }}
              >
                <IconBrandGithub size={14} />
                <span>GitHub Repository</span>
                <IconExternalLink size={11} style={{ opacity: 0.6 }} />
              </Anchor>
              <Anchor
                href="https://github.com/demonmhon/kin-arai-dai/issues"
                target="_blank"
                rel="noopener noreferrer"
                size="xs"
                c="gray.7"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  textDecoration: 'none',
                }}
              >
                <IconBug size={14} />
                <span>แจ้งปัญหา / แนะนำอาหาร</span>
                <IconExternalLink size={11} style={{ opacity: 0.6 }} />
              </Anchor>
              <Anchor
                href="https://github.com/demonmhon/kin-arai-dai#readme"
                target="_blank"
                rel="noopener noreferrer"
                size="xs"
                c="gray.7"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  textDecoration: 'none',
                }}
              >
                <IconGitPullRequest size={14} />
                <span>ร่วมเพิ่มและปรับปรุงข้อมูล</span>
                <IconExternalLink size={11} style={{ opacity: 0.6 }} />
              </Anchor>
            </Stack>
          </Grid.Col>

          {/* Col 4: Licenses & Rights */}
          <Grid.Col span={{ base: 12, sm: 12, md: 3 }}>
            <Text fw={700} size="xs" tt="uppercase" c="dimmed" mb="sm" style={{ letterSpacing: '0.6px' }}>
              ลิขสิทธิ์ & สัญญาอนุญาต
            </Text>
            <Stack gap={10}>
              <Box>
                <Group gap={6} mb={2}>
                  <IconScale size={14} color="#059669" />
                  <Anchor
                    href="https://github.com/demonmhon/kin-arai-dai/blob/main/LICENSE"
                    target="_blank"
                    rel="noopener noreferrer"
                    size="xs"
                    fw={600}
                    c="emerald.8"
                    style={{ textDecoration: 'none' }}
                  >
                    ซอร์สโค้ด: MIT License
                  </Anchor>
                </Group>
                <Text size="11px" c="dimmed" lh={1.4}>
                  เปิดเผยโค้ดต้นฉบับ ใช้งานและศึกษาได้อย่างอิสระ
                </Text>
              </Box>

              <Box>
                <Group gap={6} mb={2}>
                  <IconCreativeCommons size={14} color="#059669" />
                  <Anchor
                    href="https://creativecommons.org/licenses/by-sa/4.0/"
                    target="_blank"
                    rel="noopener noreferrer"
                    size="xs"
                    fw={600}
                    c="emerald.8"
                    style={{ textDecoration: 'none' }}
                  >
                    เนื้อหา & ข้อมูล: CC BY-SA 4.0
                  </Anchor>
                </Group>
                <Text size="11px" c="dimmed" lh={1.4}>
                  ข้อมูลเผยแพร่เพื่อสาธารณะ นำไปใช้ต่อได้โดยระบุที่มา
                </Text>
              </Box>

              <Box>
                <Group gap={6} mb={2}>
                  <IconBook size={14} color="#059669" />
                  <Anchor
                    component={Link}
                    to="/references"
                    size="xs"
                    fw={600}
                    c="emerald.8"
                    style={{ textDecoration: 'none' }}
                  >
                    รูปภาพ: Creative Commons / CC0
                  </Anchor>
                </Group>
                <Text size="11px" c="dimmed" lh={1.4}>
                  ภาพอาหารทั้งหมดระบุแหล่งที่มาและสัญญาอนุญาตกำกับไว้
                </Text>
              </Box>
            </Stack>
          </Grid.Col>
        </Grid>

        {/* Medical Disclaimer Banner */}
        <Paper
          p={{ base: 'sm', sm: 'md' }}
          radius="md"
          mb="lg"
          style={{
            backgroundColor: '#f8fafc',
            border: '1px solid #e2e8f0',
          }}
        >
          <Group gap="xs" mb={4} align="center">
            <IconShieldCheck size={16} color="#059669" />
            <Text size="xs" fw={700} c="slate.8" style={{ color: '#1e293b' }}>
              ข้อจำกัดความรับผิดชอบทางการแพทย์ (Medical Disclaimer)
            </Text>
          </Group>
          <Text size="11px" c="dimmed" lh={1.65}>
            ข้อมูลในเว็บไซต์นี้จัดทำขึ้นเพื่อรวบรวมและสรุปความรู้ทางโภชนาการเบื้องต้นเพื่อประโยชน์แก่ผู้ใช้งาน ผู้ดูแล และผู้ที่ใส่ใจดูแลสุขภาพเท่านั้น ไม่ใช่การให้คำปรึกษาทางการแพทย์หรือทดแทนการวินิจฉัย การรักษา และคำแนะนำเฉพาะบุคคลจากแพทย์ผู้เชี่ยวชาญหรือนักกำหนดอาหารวิชาชีพ สภาพร่างกายและภาวะทางสุขภาพของแต่ละบุคคลมีความแตกต่างกัน โปรดปรึกษาแพทย์หรือบุคลากรทางการแพทย์ประจำตัวของท่านก่อนปรับเปลี่ยนรูปแบบอาหารเสมอ
          </Text>
        </Paper>

        <Divider color="#e2e8f0" mb="md" />

        {/* Bottom Bar: Copyright & GitHub Button */}
        <Group justify="space-between" align="center" wrap="wrap" gap="sm">
          <Text size="xs" c="dimmed">
            Copyright © {currentYear} <strong>Kin Arai Dai (กินอะไรได้)</strong>. All rights reserved. Source code under{' '}
            <Anchor
              href="https://github.com/demonmhon/kin-arai-dai/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              c="dimmed"
              style={{ textDecoration: 'underline' }}
            >
              MIT
            </Anchor>
            , content under{' '}
            <Anchor
              href="https://creativecommons.org/licenses/by-sa/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              c="dimmed"
              style={{ textDecoration: 'underline' }}
            >
              CC BY-SA 4.0
            </Anchor>
            {onOpenPrivacyModal && (
              <>
                {' • '}
                <Text
                  component="button"
                  type="button"
                  onClick={onOpenPrivacyModal}
                  size="xs"
                  c="dimmed"
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    margin: 0,
                    cursor: 'pointer',
                    textDecoration: 'underline',
                    fontFamily: 'inherit',
                  }}
                >
                  ความเป็นส่วนตัว
                </Text>
              </>
            )}
          </Text>

          <Group gap="xs">
            <Anchor
              href="https://github.com/demonmhon/kin-arai-dai"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <Button
                size="compact-xs"
                variant="default"
                radius="xl"
                leftSection={<IconBrandGithub size={13} />}
                styles={{
                  root: {
                    borderColor: '#cbd5e1',
                    fontWeight: 600,
                    color: '#334155',
                  },
                }}
              >
                GitHub
              </Button>
            </Anchor>
            <Text size="xs" c="dimmed" style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
              Made with <IconHeart size={12} color="#ef4444" fill="#ef4444" /> for public health
            </Text>
          </Group>
        </Group>
      </Container>
    </Box>
  );
};
