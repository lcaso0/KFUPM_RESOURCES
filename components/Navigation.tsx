"use client";

import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, useClerk, UserButton } from "@clerk/nextjs";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openSignIn } = useClerk();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-16 h-6 flex items-center justify-center">
              <img
                src="/kfupm-logo.svg"
                alt="KFUPM Logo"
                className="w-16 h-6"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-cairo font-bold text-lg text-foreground">
                Verified Resource Hub
              </h1>
              <p className="font-noto-arabic text-sm text-muted-foreground">
                مركز الموارد المعتمدة
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-foreground hover:text-primary transition-colors font-cairo"
            >
              Home | الرئيسية
            </a>
            <a
              href="#features"
              className="text-foreground hover:text-primary transition-colors font-cairo"
            >
              Features | المميزات
            </a>
            <a
              href="#resources"
              className="text-foreground hover:text-primary transition-colors font-cairo"
            >
              Resources | الموارد
            </a>
            <a
              href="#contact"
              className="text-foreground hover:text-primary transition-colors font-cairo"
            >
              Contact | تواصل
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <SignedOut>
              <Button
                onClick={() => openSignIn()}
                className="bg-gradient-secondary text-secondary-foreground hover:bg-secondary/90 font-cairo"
              >
                Get Started | ابدأ الآن
              </Button>
            </SignedOut>
            <SignedIn>
              <UserButton
                appearance={{
                  elements: {
                    userButtonAvatarBox: {
                      width: "2.5rem",
                      height: "2.5rem",
                    },
                  },
                }}
              />
            </SignedIn>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <a
                href="#home"
                className="text-foreground hover:text-primary transition-colors font-cairo py-2"
              >
                Home | الرئيسية
              </a>
              <a
                href="#features"
                className="text-foreground hover:text-primary transition-colors font-cairo py-2"
              >
                Features | المميزات
              </a>
              <a
                href="#resources"
                className="text-foreground hover:text-primary transition-colors font-cairo py-2"
              >
                Resources | الموارد
              </a>
              <a
                href="#contact"
                className="text-foreground hover:text-primary transition-colors font-cairo py-2"
              >
                Contact | تواصل
              </a>
              <SignedOut>
                <Button
                  onClick={() => openSignIn()}
                  className="bg-gradient-secondary text-secondary-foreground hover:bg-secondary/90 font-cairo"
                >
                  Get Started | ابدأ الآن
                </Button>
              </SignedOut>
              <SignedIn>
                <UserButton
                  appearance={{
                    elements: {
                      userButtonAvatarBox: {
                        width: "2.5rem",
                        height: "2.5rem",
                      },
                    },
                  }}
                />
              </SignedIn>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
